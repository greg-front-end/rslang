import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWordsItem } from '../types/IWordsItem';

interface IState {
  words: IWordsItem[];
  currentIndex: number;
  currentWord: IWordsItem;
  end: number;
  timerStop: boolean;
  finish: boolean;
  startLoading: boolean;
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
  end: 10,
  timerStop: false,
  finish: false,
  startLoading: false,
};

const audioChallengeSlice = createSlice({
  name: 'audioChallenge',
  initialState,
  reducers: {
    startLoading(state, action: PayloadAction<boolean>) {
      state.startLoading = action.payload;
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
  changeWords, changeCurrentWord, finishGame,
  setInitState, resetTimer, startTimer, stopTimer,
} = audioChallengeSlice.actions;
export default audioChallengeSlice.reducer;
