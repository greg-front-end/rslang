import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateUserResponse } from '../types/ICreateUserResponse';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export const loadUser = createAsyncThunk<ICreateUserResponse, null,
  { rejectValue: string }
>(
  'auth/loadUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = getValueLocalStorage('Token');
      const id = getValueLocalStorage('UserId');
      const response = await axios.get(`${URL}${ApiPath.Users}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data as ICreateUserResponse;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  },
);