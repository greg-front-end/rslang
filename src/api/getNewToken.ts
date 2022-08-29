import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ITokenData } from '../types/ITokenData';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export const getNewToken = createAsyncThunk<ITokenData, null,
  { rejectValue: string }
>(
  'auth/getNewToken',
  async (_, { rejectWithValue }) => {
    try {
      const id = getValueLocalStorage('UserId');
      const token = getValueLocalStorage('Token');
      const response = await axios.get(`${URL}${ApiPath.Users}/${id}/tokens`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data as ITokenData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  },
);
