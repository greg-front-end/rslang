import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { IWordsItem } from '../types/IWordsItem';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export const getEasyWords = createAsyncThunk<IWordsItem[], undefined, { rejectValue: string }>(
  'textBookS/getEasyWords',
  async (_, { rejectWithValue }) => {
    const id = JSON.parse(getValueLocalStorage('UserId') as string);
    const token = JSON.parse(getValueLocalStorage('Token') as string);
    const res = await axios.get(
      `${URL}users/${id}/aggregatedWords`,
      {
        params: {
          filter: { 'userWord.difficulty': 'easy' },
        },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  },
);
