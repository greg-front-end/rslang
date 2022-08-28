import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateUser } from '../types/ICreateUser';
import { ICreateUserResponse } from '../types/ICreateUserResponse';

export const signIn = createAsyncThunk<ICreateUserResponse, ICreateUser,
  { rejectValue: string }
>(
  'auth/signIn',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL}${ApiPath.Users}`, { ...values });
      return response.data as ICreateUserResponse;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  },
);
