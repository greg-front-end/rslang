import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SprintState, SprintWord } from '../types/Sprint';

const initialState: SprintState = {
  sprintWords: [],
  indicators: [false, false, false],
};

const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setSprintWords: (state, action: PayloadAction<SprintWord[]>) => {
      state.sprintWords = action.payload;
    },

    setIndicators: (state, action: PayloadAction<boolean[]>) => {
      state.indicators = action.payload;
    },
    removeSprintWord: (state, action: PayloadAction<string>) => {
      state.sprintWords = state.sprintWords.filter((el) => el.word !== action.payload);
    },
  },
});

export const { setSprintWords, removeSprintWord, setIndicators } = sprintSlice.actions;

export default sprintSlice.reducer;
