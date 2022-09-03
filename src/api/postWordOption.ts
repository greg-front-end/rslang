import { createAsyncThunk, findNonSerializableValue } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateWordOptions } from '../types/ICreateWordOptions';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

import { putWordOption } from './putWordOption';

export const postWordOption = createAsyncThunk<ICreateWordOptions, ICreateWordOptions,
  { rejectValue: string }
>(
  'hardsLearnedWords/postWordOption',
  async (values, { dispatch, rejectWithValue }) => {
    const { wordId, ...data } = values;
    try {
      const lsDataToken = getValueLocalStorage('Token')!;
      const token = JSON.parse(lsDataToken);
      const lsDataId = getValueLocalStorage('UserId')!;
      const userId = JSON.parse(lsDataId);
      const response = await axios.post(`${URL}${ApiPath.Users}/${userId}/${ApiPath.Words}/${wordId}`, { ...data }, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data as ICreateWordOptions;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 417) {
          dispatch(putWordOption(values));
        }
        return rejectWithValue(error.response?.status.toString() as string);
      }
      throw error;
    }
  },
);
