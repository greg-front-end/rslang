import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { RootState } from '../store/store';
import { IWordsItem } from '../types/IWordsItem';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

interface IGetNoEasyWords {
  page: number;
  quantity: number;
}

export const getNoEasyWords = createAsyncThunk<
  IWordsItem[], IGetNoEasyWords, { rejectValue: string }>(
    'textBookS/getNoEasyWords',
    async (n, { rejectWithValue, getState }) => {
      const state: RootState = <RootState>getState();
      const id = JSON.parse(getValueLocalStorage('UserId') as string);
      const token = JSON.parse(getValueLocalStorage('Token') as string);
      const res = await axios.get(
        `${URL}users/${id}/aggregatedWords`,
        {
          params: {
            group: state.textBook.group,
            page: n.page,
            wordsPerPage: n.quantity,
            filter: { $or: [{ $or: [{ 'userWord.difficulty': 'hard' }, { 'userWord.difficulty': 'none' }] }, { userWord: null }] },
          },
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      return res.data[0].paginatedResults;
    },
  );
