import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { RootState } from '../store/store';
import { IWordsItem } from '../types/IWordsItem';

export const getCard = createAsyncThunk<IWordsItem[], undefined, { rejectValue: string }>(
  'textBookS/getCard',
  async (_, { rejectWithValue, getState }) => {
    const state: RootState = <RootState>getState();
    const res = await axios.get(
      `${URL}words`,
      {
        params: {
          group: state.textBook.group,
          page: 0,
        },
      },
    );
    return res.data;
  },
);
