import { createSlice } from '@reduxjs/toolkit';

import { logIn } from '../api/logIn';
import { registerUser } from '../api/registerUser';
import { IAuthState } from '../types/IAuthState';
import { ResponseStatus } from '../types/ResponseStatus';

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
      .addCase(
        registerUser.pending,
        (state) => ({ ...state, registerStatus: ResponseStatus.Pending }),
      );
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => ({
        ...state,
        name: payload.name,
        email: payload.email,
        id: payload.id,
        registerStatus: ResponseStatus.Success,
      }));
    builder
      .addCase(
        registerUser.rejected,
        (state, action) => {
          if (action.payload) {
            return {
              ...state,
              registerError: action.payload,
              registerStatus: ResponseStatus.Rejected,
            };
          }
          return {
            ...state,
            registerError: action.error as string,
            registerStatus: ResponseStatus.Rejected,
          };
        },
      );
    builder
      .addCase(
        logIn.pending,
        (state) => ({ ...state, registerStatus: ResponseStatus.Pending }),
      );
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        localStorage.setItem('token', JSON.stringify({
          id: payload.userId,
          name: state.name,
          token: payload.token,
          refreshToken: payload.refreshToken,
        }));
        return {
          ...state,
          token: payload,
          loginStatus: payload.message,
          registerStatus: ResponseStatus.Success,
        };
      });
    builder
      .addCase(
        logIn.rejected,
        (state, action) => {
          if (action.payload) {
            return {
              ...state,
              registerError: action.payload,
              loginError: action.payload,
              registerStatus: ResponseStatus.Rejected,
            };
          }
          return {
            ...state,
            registerError: action.error as string,
            registerStatus: ResponseStatus.Rejected,
          };
        },
      );
  },
});

export default authSlice.reducer;
