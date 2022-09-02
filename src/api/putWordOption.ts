import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateWordOptions } from '../types/ICreateWordOptions';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

interface IPostWordOption {
  id: string;
  difficulty: string;
    optional: {
      rigthTime: number;
    },
  wordId: string;
}

export const putWordOption = createAsyncThunk<IPostWordOption, ICreateWordOptions,
  { rejectValue: string }
>(
  'hardsLearnedWords/putWordOption',
  async (values, { rejectWithValue }) => {
    const { wordId, ...data } = values;
    try {
      const lsDataToken = getValueLocalStorage('Token')!;
      const token = JSON.parse(lsDataToken);
      const lsDataId = getValueLocalStorage('UserId')!;
      const userId = JSON.parse(lsDataId);
      const response = await axios.put(`${URL}${ApiPath.Users}/${userId}/${ApiPath.Words}/${wordId}`, { ...data }, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.status.toString() as string);
      }
      throw error;
    }
  },
);
