import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { URL } from '../constants/URL';
import { IAuthState } from '../types/IAuthState';

interface IAuthValues {
  name: string,
  email: string,
  password: string
}
interface IToken {
  message:string,
  token: string,
  refreshToken: string,
  userId: string,
  name: string
}

export const registerUser = createAsyncThunk<IToken, IAuthValues,
  { rejectValue: string }
>(
  'auth/registerUser',
  async (values, { rejectWithValue }) => {
    const token = await axios.post(`${URL}users`, {
      name: values.name,
      email: values.email,
      password: values.password,
    });
    localStorage.setItem('token', JSON.stringify(token.data));
    return token.data as IToken;
  },
);

const initialState: IAuthState = {
  token: localStorage.getItem('token'),
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
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const user = jwtDecode(payload);
        return {
          ...state,
          token: payload,
          name: user.name,
          email: user.email,
          id: user.id,
          registerStatus: 'success',
        };
      });
    builder
      .addCase(
        registerUser.rejected,
        (state, { payload }) => ({ ...state, registerError: payload, registerStatus: 'rejected' }),
      );
  },
});

export default authSlice.reducer;
