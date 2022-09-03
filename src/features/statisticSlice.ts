import { createSlice } from '@reduxjs/toolkit';

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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(putUserStatistic.fulfilled, (state, action) => {

  //     });
  // },
});

export default statisticSlice.reducer;
