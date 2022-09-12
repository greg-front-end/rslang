import { createSlice } from '@reduxjs/toolkit';

import { getUserStatistic } from '../api/getUserStatistic';
import { putUserStatistic } from '../api/putUserStatistic';
import { StatisticsState } from '../types/Statistic';
import { dateKeyGenerator } from '../utils/dateKeyGenerator';

interface IInitialState {
  statistic: StatisticsState
}

export const initialState: IInitialState = {
  statistic: {
    learnedWords: 0,
    optional: {
      [dateKeyGenerator()]: {
        learnedWords: 0,
        newWords: 0,
        generalAccuracy: -1,
        audioCall: {
          inRow: 0,
          words: 0,
          inAccuracy: 0,
          learnedWords: 0,
        },
        sprint: {
          inRow: 0,
          words: 0,
          inAccuracy: 0,
          learnedWords: 0,
        },
      },
    },
  },
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putUserStatistic.fulfilled, (state, action) => {
        state.statistic = action.payload;
      })

      .addCase(getUserStatistic.fulfilled, (state, action) => {
        state.statistic = action.payload;
      });
  },
});

export default statisticSlice.reducer;
