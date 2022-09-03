import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';
import { SprintState, SprintWord } from '../types/Sprint';

const initialState: SprintState = {
  sprintWords: [],
  indicators: [false, false, false],
  currectWrongWords: [],
  currectWords: [],
  wrongWords: [],
  timer: 60,
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

    setInRow: (state, action: PayloadAction<string>) => {
      state.currectWrongWords = [...state.currectWrongWords, action.payload];
    },
    setCurrentWords: (state, action: PayloadAction<IWordsItem>) => {
      state.currectWords = [...state.currectWords, action.payload];
    },
    setWrongWords: (state, action: PayloadAction<IWordsItem>) => {
      state.wrongWords = [...state.wrongWords, action.payload];
    },
    decrementTimer: (state, action: PayloadAction<number>) => {
      state.timer -= action.payload;
    },
  },
});

export const {
  setSprintWords, removeSprintWord, setIndicators,
  setInRow, setCurrentWords, setWrongWords, decrementTimer,
} = sprintSlice.actions;

export default sprintSlice.reducer;
