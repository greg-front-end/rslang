import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateUser } from '../types/ICreateUser';
import { ITokenData } from '../types/ITokenData';

export const loginUser = createAsyncThunk<ITokenData, Omit<ICreateUser, 'name'>,
  { rejectValue: string }
>(
  'auth/loginUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${URL}${ApiPath.Signin}`, { ...values });
      return token.data as ITokenData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  },
);
