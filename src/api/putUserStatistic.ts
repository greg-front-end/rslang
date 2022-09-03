import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { RootState } from '../store/store';
import { GameStatistics, StatisticsState } from '../types/Statistic';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

export const putUserStatistic = createAsyncThunk<StatisticsState, GameStatistics,
  { rejectValue: string }>(
    'statistic/putUserStatistic',
    async (obj, { rejectWithValue }) => {
      const id = JSON.parse(getValueLocalStorage('UserId') as string);
      const lsDataToken = getValueLocalStorage('Token')!;
      const token = JSON.parse(lsDataToken);
      try {
        const response = await axios.put(
          `${URL}/users/${id}/statistics`,
          {
            obj,
          },

          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        return response.data as StatisticsState;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data as string);
        }
        throw error;
      }
    },
  );
