import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';

interface IState {
  textBookWords: IWordsItem[];
  words: IWordsItem[];
  rightWords: IWordsItem[];
  currentIndex: number;
  currentWord: IWordsItem;
  finish: boolean;
  nextWord: boolean;
  inRow: number;
  rowCounter: number;
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
  textBookWords: [],
  words: [],
  rightWords: [],
  currentIndex: 0,
  currentWord: {} as IWordsItem,
  finish: false,
  nextWord: false,
  inRow: 0,
  rowCounter: 0,
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    setTextBookWords(state, action) {
      state.textBookWords = action.payload;
    },

    changeCounter(state, action) {
      state.rowCounter = action.payload;
    },
    setInRow(state, action) {
      if (action.payload > state.inRow) {
        state.inRow = action.payload;
      }
    },
    setNextWord(state, action: PayloadAction<boolean>) {
      state.nextWord = action.payload;
    },
    addRightAnswer(state, action: PayloadAction<IWordsItem>) {
      state.rightWords = [...state.rightWords, action.payload];
    },
    finishGame(state, action: PayloadAction<boolean>) {
      state.finish = action.payload;
    },
    setInitState(state, action: PayloadAction<IInitState>) {
      state.words = action.payload.words;
      state.currentWord = action.payload.currentWord;
      state.currentIndex = initialState.currentIndex;
      state.rightWords = [];
      state.finish = false;
    },
    changeWords(state, action: PayloadAction<IWordsItem[]>) {
      state.words = action.payload;
    },
    changeCurrentWord(state, action: PayloadAction<IChangeWordState>) {
      state.currentWord = action.payload.currentWord;
      state.currentIndex = action.payload.currentIndex;
    },
  },
});

export const {
  changeWords, changeCurrentWord, finishGame, addRightAnswer,
  setInitState, setNextWord, setInRow, changeCounter, setTextBookWords,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
