import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';

interface IState {
  words: IWordsItem[];
  currentIndex: number;
  currentWord: IWordsItem;
  end: number;
  timerStop: boolean;
  change: boolean;
}

interface IInitState {
  words: IWordsItem[];
  currentWord: IWordsItem;
}
interface IChangeWordState {
  currentIndex: number;
  currentWord: IWordsItem;
}

const initialState: IState = {
  words: [],
  currentIndex: 0,
  currentWord: {} as IWordsItem,
  end: 15,
  timerStop: false,
  change: false,
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    change(state) {
      state.change = !state.change;
    },
    stopTimer(state, action: PayloadAction<boolean>) {
      state.timerStop = action.payload;
    },
    reset(state) {
      state.end = 0;
      state.timerStop = true;
    },
    startTimer(state) {
      state.end -= 1;
    },
    resetTimer(state) {
      state.end = 15;
    },
    setInitState(state, action: PayloadAction<IInitState>) {
      state.words = action.payload.words;
      state.currentWord = action.payload.currentWord;
      state.currentIndex = 0;
    },
    changeWords(state, action: PayloadAction<IWordsItem[]>) {
      state.words = action.payload;
    },
    changeCurrentIndex(state, action: PayloadAction<number>) {
      state.currentIndex = action.payload;
    },
    changeCurrentWord(state, action: PayloadAction<IChangeWordState>) {
      state.currentWord = action.payload.currentWord;
      state.currentIndex = action.payload.currentIndex;
    },
  },
});

export const {
  changeWords, changeCurrentIndex, changeCurrentWord, change,
  setInitState, resetTimer, startTimer, reset, stopTimer,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
