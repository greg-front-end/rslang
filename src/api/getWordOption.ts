import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateWordOptions } from '../types/ICreateWordOptions';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

import { putWordOption } from './putWordOption';

export interface IPostWordOption {
  id: string;
  difficulty: string;
    optional: {
      rigthTime: number;
    },
  wordId: string;
}

export const getWordOption = async (wordId: string) => {
  try {
    const lsDataToken = getValueLocalStorage('Token')!;
    const token = JSON.parse(lsDataToken);
    const lsDataId = getValueLocalStorage('UserId')!;
    const userId = JSON.parse(lsDataId);
    const response = await axios.get(`${URL}${ApiPath.Users}/${userId}/${ApiPath.Words}/${wordId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data as IPostWordOption;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
    throw error;
  }
};
