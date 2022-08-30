import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getRandomNum } from '../components/AudioGame/utils/getRandomNum';
import { IWordsItem } from '../types/IWordsItem';

interface IState {
  words: IWordsItem[];
  usedWords: string[];
  currentWord: IWordsItem;
  end: number;
  counterState: boolean;
}

interface IInitState {
  words: IWordsItem[];
  usedWords: string[];
  currentWord: IWordsItem;
}

const initialState: IState = {
  words: [],
  usedWords: [],
  currentWord: {} as IWordsItem,
  end: 15,
  counterState: false,
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    reset(state) {
      state.end = 0;
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
      state.usedWords = action.payload.usedWords;
    },
    changeWords(state, action: PayloadAction<IWordsItem[]>) {
      state.words = action.payload;
    },
    addToUsedWords(state, action: PayloadAction<string>) {
      state.usedWords = [...state.usedWords, action.payload];
    },
    clearUsedWords(state) {
      state.usedWords = [];
    },
    changeCurrentWord(state) {
      state.currentWord = state.words[getRandomNum(state.words.length)];
    },
  },
});

export const {
  changeWords, addToUsedWords, clearUsedWords, changeCurrentWord,
  setInitState, resetTimer, startTimer, reset,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
