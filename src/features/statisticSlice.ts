import { createSlice } from '@reduxjs/toolkit';

import { getUserStatistic } from '../api/getUserStatistic';
import { putUserStatistic } from '../api/putUserStatistic';
import { StatisticsState } from '../types/Statistic';

export const initialState: StatisticsState = {
  learnedWords: 0,
  optional: {

  },
};

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
const year = date.getFullYear();

const key = `${day}/${month}/${year}`;

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putUserStatistic.pending, (state, action) => {
        console.log('pending');
      })

      .addCase(putUserStatistic.fulfilled, (state, action) => {
        console.log('fulfilled');
      })

      .addCase(putUserStatistic.rejected, (state, action) => {
        console.log('rejected');
      })

      .addCase(getUserStatistic.pending, (state, action) => {
        console.log('pending');
      })

      .addCase(getUserStatistic.fulfilled, (state, action) => {
        console.log('fulfilled');
      })

      .addCase(getUserStatistic.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export default statisticSlice.reducer;
