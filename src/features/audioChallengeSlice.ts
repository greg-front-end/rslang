import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';

interface IState {
  words: IWordsItem[];
  rightWords: IWordsItem[];
  currentIndex: number;
  currentWord: IWordsItem;
  finish: boolean;
  nextWord: boolean;
  inRow: number;
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
  rightWords: [],
  currentIndex: 0,
  currentWord: {} as IWordsItem,
  finish: false,
  nextWord: false,
  inRow: 0,
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    setInRow(state, action) {
      console.log('row in slice', action.payload);
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
  setInitState, setNextWord, setInRow,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
