import { createSlice } from '@reduxjs/toolkit';

import { logIn } from '../api/logIn';
import { signIn } from '../api/signIn';
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
  reducers: {
    logOutUser(state) {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        name: '',
        email: '',
        id: '',
        registerStatus: '',
        registerError: '',
        loginStatus: '',
        loginError: '',
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        signIn.pending,
        (state) => ({ ...state, registerStatus: ResponseStatus.Pending }),
      );
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => ({
        ...state,
        name: payload.name,
        email: payload.email,
        id: payload.id,
        registerStatus: ResponseStatus.Success,
      }));
    builder
      .addCase(
        signIn.rejected,
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
          userLoaded: true,
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

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
