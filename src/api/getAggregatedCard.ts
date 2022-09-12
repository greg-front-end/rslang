import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { RootState } from '../store/store';
import { IWordsItem } from '../types/IWordsItem';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export const getAgregatedCard = createAsyncThunk<IWordsItem[], undefined, { rejectValue: string }>(
  'textBookS/getAggregatedCard',
  async (_, { rejectWithValue, getState }) => {
    const state: RootState = <RootState>getState();
    const id = JSON.parse(getValueLocalStorage('UserId') as string);
    const token = JSON.parse(getValueLocalStorage('Token') as string);
    const res = await axios.get(
      `${URL}users/${id}/aggregatedWords`,
      {
        params: {
          group: state.textBook.group,
          page: state.textBook.page,
          wordsPerPage: 20,
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
