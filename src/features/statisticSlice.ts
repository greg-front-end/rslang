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
        learnedWordsToday: 0,
        audioCall: {
          inRow: 0,
          words: 0,
          inAccuracy: 0,
        },
        sprint: {
          inRow: 0,
          words: 0,
          inAccuracy: 0,
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
      .addCase(putUserStatistic.pending, (state, action) => {
        // console.log('pending');
      })

      .addCase(putUserStatistic.fulfilled, (state, action) => {
        state.statistic = action.payload;
      })

      .addCase(putUserStatistic.rejected, (state, action) => {
        // console.log('rejected');
      })

      .addCase(getUserStatistic.pending, (state, action) => {
        // console.log('pending');
      })

      .addCase(getUserStatistic.fulfilled, (state, action) => {
        // console.log('getUserStatistic fulfilled');
        state.statistic = action.payload;
      })

      .addCase(getUserStatistic.rejected, (state, action) => {
        // console.log('rejected');
      });
  },
});

export default statisticSlice.reducer;
