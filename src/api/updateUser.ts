import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export interface IUpdateUser {
  email: string,
  password: string
}

export const updateUser = createAsyncThunk<IUpdateUser, IUpdateUser,
  { rejectValue: string }
>(
  'auth/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      const lsDataToken = getValueLocalStorage('Token')!;
      const token = JSON.parse(lsDataToken);
      const lsDataId = getValueLocalStorage('UserId')!;
      const userId = JSON.parse(lsDataId);
      const response = await axios.put(`${URL}${ApiPath.Users}/${userId}`, { ...data }, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data.optional.avatar;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.status.toString() as string);
      }
      throw error;
    }
  },
);
