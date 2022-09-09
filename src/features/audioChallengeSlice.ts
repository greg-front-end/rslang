/* eslint-disable no-underscore-dangle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICreateWordOptions } from '../types/ICreateWordOptions';
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
  isPushNextBtn: boolean;
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
  isPushNextBtn: false,
};

const fillElement = (el: IWordsItem, diff: ICreateWordOptions) => {
  const word = el;
  if (Object.hasOwn(word, 'userWord')) {
    word.userWord.difficulty = diff.difficulty;
    word.userWord.optional = diff.optional;
  } else {
    word.userWord = {
      difficulty: diff.difficulty,
      optional: {
        right: 0,
        wrong: 0,
        rightInRow: 0,
      },
    };
  }
  return word;
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    pushNextButton(state) {
      state.isPushNextBtn = !state.isPushNextBtn;
    },
    updateWords(state, action: PayloadAction<ICreateWordOptions>) {
      const index = state.words.findIndex((el) => el._id === action.payload.wordId);
      state.words = state.words
        .map((el, i) => (i === index ? fillElement(el, action.payload) : el));
    },
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
    resetInRow(state) {
      state.inRow = 0;
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
      state.inRow = 0;
      state.rowCounter = 0;
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
  changeWords, changeCurrentWord, finishGame, addRightAnswer, resetInRow, pushNextButton,
  setInitState, setNextWord, setInRow, changeCounter, setTextBookWords, updateWords,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
