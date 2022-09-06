import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { RootState } from '../store/store';
import { IWordsItem } from '../types/IWordsItem';

export const getCardSprint = createAsyncThunk<IWordsItem[], number, { rejectValue: string }>(
  'sprint/getCardSprint',
  async (num, { rejectWithValue, getState }) => {
    const state: RootState = <RootState>getState();
    const res = await axios.get(
      `${URL}words`,
      {
        params: {
          group: state.textBook.group,
          page: num,
        },
      },
    );
    return res.data;
  },
);
