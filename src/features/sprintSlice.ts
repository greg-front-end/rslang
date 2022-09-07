import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAgregatedCardSprint } from '../api/getAggregatedCardSprint';
import { getCardSprint } from '../api/getCardSprint';
import { IWordsItem } from '../types/IWordsItem';
import { LoadStatus } from '../types/LoadStatus';
import { SprintState, SprintWord } from '../types/Sprint';

const initialState: SprintState = {
  isLoad: false,
  buffer: [],
  pageBuffer: 0,
  sprintWords: [],
  indicators: [false, false, false],
  currectWrongWords: [],
  currectWords: [],
  wrongWords: [],
  timer: 10,
  timerBeforeGame: 4,
  inRow: 0,
  loadStatus: '',
};

const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setPageBuffer: (state, action) => {
      state.pageBuffer = action.payload;
    },

    clearBuffer: (state) => {
      state.buffer = [];
    },
    setIsLoad: (state, action: PayloadAction<boolean>) => {
      state.isLoad = action.payload;
    },
    setInRow: (state, action: PayloadAction<number>) => {
      state.inRow = action.payload;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
    setTimerBeforeGame: (state, action: PayloadAction<number>) => {
      state.timerBeforeGame = action.payload;
    },
    setSprintWords: (state, action: PayloadAction<SprintWord[]>) => {
      state.sprintWords = [...state.sprintWords, ...action.payload];
    },

    setIndicators: (state, action: PayloadAction<boolean[]>) => {
      state.indicators = action.payload;
    },
    removeSprintWord: (state, action: PayloadAction<string>) => {
      state.sprintWords = state.sprintWords.filter((el) => el.word !== action.payload);
    },

    setCurrectWrongWords: (state, action: PayloadAction<string>) => {
      state.currectWrongWords = [...state.currectWrongWords, action.payload];
    },
    clearCurrectWrongWords: (state) => {
      state.currectWrongWords = [];
    },
    setCurrentWords: (state, action: PayloadAction<IWordsItem>) => {
      state.currectWords = [...state.currectWords, action.payload];
    },
    clearCurrentWords: (state) => {
      state.currectWords = [];
    },
    clearSprintWords: (state) => {
      state.sprintWords = [];
    },
    setWrongWords: (state, action: PayloadAction<IWordsItem>) => {
      state.wrongWords = [...state.wrongWords, action.payload];
    },
    clearWrongWords: (state) => {
      state.wrongWords = [];
    },
    decrementTimer: (state, action: PayloadAction<number>) => {
      if (state.timer > 0) state.timer -= action.payload;
    },
    decrementTimerBeforeGame: (state, action: PayloadAction<number>) => {
      if (state.timer > 0) state.timerBeforeGame -= action.payload;
    },
    clearLoadStatus: (state) => {
      state.loadStatus = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardSprint.pending, (state, action) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(getCardSprint.fulfilled, (state, action) => {
        state.buffer = action.payload;
        state.loadStatus = LoadStatus.fulfilled;
      })
      .addCase(getAgregatedCardSprint.pending, (state, action) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(getAgregatedCardSprint.fulfilled, (state, action) => {
        state.buffer = action.payload;
        state.loadStatus = LoadStatus.fulfilled;
      });
  },
});

export const {
  setPageBuffer,
  setSprintWords, removeSprintWord, setIndicators, clearSprintWords,
  setTimer, decrementTimerBeforeGame, setInRow, clearLoadStatus,
  setCurrentWords, setWrongWords, decrementTimer, clearCurrectWrongWords,
  clearCurrentWords, clearWrongWords, setTimerBeforeGame, setCurrectWrongWords,
  setIsLoad, clearBuffer,
} = sprintSlice.actions;

export default sprintSlice.reducer;
