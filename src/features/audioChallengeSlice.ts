import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';

interface IState {
  words: IWordsItem[];
  usedWords: string[];
  currentWord: IWordsItem;
}

const initialState: IState = {
  words: [],
  usedWords: [],
  currentWord: {} as IWordsItem,
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    setInitState(state, action: PayloadAction<IState>) {
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
    changeCurrentWord(state, action: PayloadAction<IWordsItem>) {
      state.currentWord = action.payload;
    },
  },
});

export const {
  changeWords, addToUsedWords, clearUsedWords, changeCurrentWord, setInitState,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
