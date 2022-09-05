import { createSlice } from '@reduxjs/toolkit';

import { deleteUser } from '../api/deleteUser';
import { getNewToken } from '../api/getNewToken';
import { loadUser } from '../api/loadUser';
import { loginUser } from '../api/loginUser';
import { putUserSettings } from '../api/putUserSettings';
import { registerUser } from '../api/registerUser';
import { IAuthState } from '../types/IAuthState';
import { LoadStatus } from '../types/LoadStatus';
import { ResponseStatus } from '../types/ResponseStatus';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';
import { removeValueLocalStorage } from '../utils/removeValueLocalStorage';
import { setValueLocalStorage } from '../utils/setValueLocalStorage';

const initialState: IAuthState = {
  id: getValueLocalStorage('UserId') as string || '',
  token: getValueLocalStorage('Token'),
  name: getValueLocalStorage('UserName') as string || '',
  email: '',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
  loadStatus: LoadStatus.rejected,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOutUser(state) {
      removeValueLocalStorage('Token');
      removeValueLocalStorage('UserId');
      removeValueLocalStorage('UserName');
      removeValueLocalStorage('LoginStatus');
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
        registerUser.pending,
        (state) => ({ ...state, registerStatus: ResponseStatus.Pending }),
      );
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        setValueLocalStorage('UserId', payload.id);
        setValueLocalStorage('UserName', payload.name);
        return {
          ...state,
          name: payload.name,
          email: payload.email,
          id: payload.id,
          registerStatus: ResponseStatus.Success,
        };
      });
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
        loginUser.pending,
        (state) => ({ ...state, registerStatus: ResponseStatus.Pending }),
      );
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        setValueLocalStorage('Token', payload.token);
        setValueLocalStorage('UserId', payload.userId);
        setValueLocalStorage('LoginStatus', ResponseStatus.Authorized);
        return {
          ...state,
          token: payload.token,
          userLoaded: true,
          loginStatus: payload.message,
          registerStatus: ResponseStatus.Success,
        };
      });
    builder
      .addCase(
        loginUser.rejected,
        (state, action) => {
          removeValueLocalStorage('LoginStatus');
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
    builder
      .addCase(
        getNewToken.pending,
        (state) => ({ ...state, registerStatus: ResponseStatus.Pending }),
      );
    builder
      .addCase(getNewToken.fulfilled, (state, { payload }) => {
        setValueLocalStorage('LoginStatus', ResponseStatus.Authorized);
        return {
          ...state,
          name: payload.name,
          userLoaded: true,
          token: payload.token,
          loginStatus: ResponseStatus.Authorized,
          registerStatus: ResponseStatus.Success,
        };
      });
    builder
      .addCase(
        getNewToken.rejected,
        (state, action) => {
          if (action.payload) {
            removeValueLocalStorage('LoginStatus');
            return {
              ...state,
              registerError: action.payload,
              loginError: action.payload,
              registerStatus: ResponseStatus.Rejected,
              userLoaded: false,
            };
          }
          return {
            ...state,
            registerError: action.error as string,
            registerStatus: ResponseStatus.Rejected,
            userLoaded: false,
          };
        },
      );
    builder
      .addCase(loadUser.pending, (state) => {
        console.log('pending');
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(loadUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.loadStatus = LoadStatus.fulfilled;
      })

      .addCase(loadUser.rejected, (state, action) => {
        console.log(action.payload);
      });

    builder
      .addCase(deleteUser.pending, (state) => {
        console.log('pending');
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log('deleteUser', action.payload);
      })

      .addCase(deleteUser.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
