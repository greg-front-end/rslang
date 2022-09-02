import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCard } from '../api/getCard';
import { IWordsItem } from '../types/IWordsItem';
import { SprintWord } from '../types/SprintWord';

export type TextBookState = {
  cards: IWordsItem[];
  sprintWords: SprintWord[],
  group: number,
  page: number,
  pageButtons: number[],
  increment: boolean,
  decrement: boolean,
  isLoad: boolean,
}

const initialState: TextBookState = {
  cards: [],
  sprintWords: [],
  group: 0,
  page: 0,
  pageButtons: [0, 1, 2, 3, 4, 5, 6],
  increment: false,
  decrement: false,
  isLoad: false,
};

const textBookSlice = createSlice({
  name: 'textBookS',
  initialState,
  reducers: {
    resetLoad: (state) => {
      state.isLoad = false;
    },
    setSprintWords: (state, action: PayloadAction<SprintWord[]>) => {
      state.sprintWords = action.payload;
    },

    setGroup: (state, action: PayloadAction<number>) => {
      state.group = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageButtons: (state, action: PayloadAction<number[]>) => {
      state.pageButtons = action.payload;
    },
    setIncrement: (state, action: PayloadAction<boolean>) => {
      state.increment = action.payload;
    },
    setDecrement: (state, action: PayloadAction<boolean>) => {
      state.decrement = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state, action) => {
        console.log('pending');
      })

      .addCase(getCard.fulfilled, (state, action) => {
        const newState = state;
        newState.cards = action.payload;
        state.isLoad = true;
      })

      .addCase(getCard.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export const {
  setGroup, setPage, setPageButtons, setIncrement, setDecrement, resetLoad, setSprintWords,
} = textBookSlice.actions;
export default textBookSlice.reducer;
