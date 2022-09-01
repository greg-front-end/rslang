import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateUserResponse } from '../types/ICreateUserResponse';
import { ICreateWordOptions } from '../types/ICreateWordOptions';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export const addWordOption = createAsyncThunk<ICreateUserResponse, ICreateWordOptions,
  { rejectValue: string }
>(
  '/users/id/words',
  async (values, { rejectWithValue }) => {
    const { wordId, ...data } = values;
    try {
      const lsDataToken = getValueLocalStorage('Token')!;
      const token = JSON.parse(lsDataToken);
      console.log(token);
      const lsDataId = getValueLocalStorage('UserId')!;
      const userId = JSON.parse(lsDataId);
      console.log(userId);
      console.log(data);
      console.log(wordId);
      const response = await axios.post(`${URL}${ApiPath.Users}/${userId}/${ApiPath.Words}/${wordId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: values,
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
