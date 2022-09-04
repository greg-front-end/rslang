import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';
import { SprintState, SprintWord } from '../types/Sprint';

const initialState: SprintState = {
  sprintWords: [],
  indicators: [false, false, false],
  currectWrongWords: [],
  currectWords: [],
  wrongWords: [],
  timer: 10,
};

const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<number>) => {
      if (state.timer > 0) state.timer = action.payload;
    },
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
    clearCurrentWords: (state) => {
      state.currectWords = [];
    },
    setWrongWords: (state, action: PayloadAction<IWordsItem>) => {
      state.wrongWords = [...state.wrongWords, action.payload];
    },
    clearWrongWords: (state) => {
      state.wrongWords = [];
    },
    decrementTimer: (state, action: PayloadAction<number>) => {
      state.timer -= action.payload;
    },
  },
});

export const {
  setSprintWords, removeSprintWord, setIndicators, setTimer,
  setInRow, setCurrentWords, setWrongWords, decrementTimer, clearCurrentWords, clearWrongWords,
} = sprintSlice.actions;

export default sprintSlice.reducer;
