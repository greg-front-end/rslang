import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateUser } from '../types/ICreateUser';
import { ILogIn } from '../types/ILogIn';

export const logIn = createAsyncThunk<ILogIn, Omit<ICreateUser, 'name'>,
  { rejectValue: string }
>(
  'auth/logIn',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${URL}${ApiPath.Signin}`, { ...values });
      return token.data as ILogIn;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  },
);
