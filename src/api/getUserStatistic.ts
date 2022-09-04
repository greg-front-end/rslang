import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { StatisticsState } from '../types/Statistic';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export const getUserStatistic = createAsyncThunk<StatisticsState, undefined,
  { rejectValue: string }>(
    'statistic/getUserStatistic',
    async (_, { rejectWithValue }) => {
      const id = JSON.parse(getValueLocalStorage('UserId') as string);
      const token = JSON.parse(getValueLocalStorage('Token') as string);
      const res = await axios.get(
        `${URL}users/${id}/statistics`,
        {
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
