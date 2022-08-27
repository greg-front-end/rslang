/* eslint no-param-reassign: ["error", { "props": false }] */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { IAuthState } from '../types/IAuthState';
import { ICreateUser } from '../types/ICreateUser';
import { IToken } from '../types/IToken';

export const registerUser = createAsyncThunk<IToken, ICreateUser,
  { rejectValue: string }
>(
  'auth/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${URL}users`, { ...values });
      localStorage.setItem('token', JSON.stringify(token.data));
      return token.data as IToken;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  },
);

const initialState: IAuthState = {
  token: JSON.parse(localStorage.getItem('token') as string),
  name: '',
  email: '',
  id: '',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => ({ ...state, registerStatus: 'pending' }));
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => ({
        ...state,
        token: payload,
        name: payload.name,
        email: payload.email,
        id: payload.id,
        registerStatus: 'success',
      }));
    builder
      .addCase(
        registerUser.rejected,
        (state, action) => {
          if (action.payload) {
            return { ...state, registerError: action.payload, registerStatus: 'rejected' };
          }
          return { ...state, registerError: action.error as string, registerStatus: 'rejected' };
        },
      );
  },
});

export default authSlice.reducer;
