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
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDlmN2U4NWViYmY5MDAxNjk2NDkwYSIsImlhdCI6MTY2MTk4Mjg4NiwiZXhwIjoxNjYxOTk3Mjg2fQ.WEU7f3XwMHRB4jkwfdenpFkvhlTuVAKe-lqTzQcNT44';
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
