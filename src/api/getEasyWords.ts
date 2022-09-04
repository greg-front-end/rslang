/* eslint-disable quote-props */
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
          group: 0,
          page: 0,
          filter: { '$or': [{ '$or': [{ 'userWord.difficulty': 'hard' }, { 'userWord.difficulty': 'none' }] }, { userWord: null }] },
        },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(res.data);
    return res.data;
  },
);
