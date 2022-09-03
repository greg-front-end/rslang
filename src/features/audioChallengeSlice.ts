import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';

interface IState {
  words: IWordsItem[];
  rightWords: IWordsItem[];
  currentIndex: number;
  currentWord: IWordsItem;
  end: number;
  timerStop: boolean;
  finish: boolean;
  nextWord: boolean;
  inRow: IWordsItem[];
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
  end: 10,
  timerStop: false,
  finish: false,
  nextWord: false,
  inRow: [],
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    setInRow(state, action) {
      if (action.payload.length > state.inRow.length) {
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
      console.log('change finish');
      state.finish = action.payload;
    },
    stopTimer(state, action: PayloadAction<boolean>) {
      state.timerStop = action.payload;
    },
    startTimer(state) {
      if (state.end) {
        state.end -= 1;
      }
      return state;
    },
    resetTimer(state) {
      state.end = 10;
    },
    setInitState(state, action: PayloadAction<IInitState>) {
      state.words = action.payload.words;
      state.currentWord = action.payload.currentWord;
      state.currentIndex = initialState.currentIndex;
      state.timerStop = false;
      state.end = initialState.end;
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
  setInitState, resetTimer, startTimer, stopTimer, setNextWord,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
