import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCard } from '../api/getCard';
import { IWordsItem } from '../types/IWordsItem';

export type TextBookState = {
  cards: IWordsItem[];
  group: number,
  page: number,
  pageButtons: number[],
  increment: boolean,
  decrement: boolean
}

const initialState: TextBookState = {
  cards: [],
  group: 0,
  page: 0,
  pageButtons: [0, 1, 2, 3, 4, 5, 6],
  increment: false,
  decrement: false,
};

const textBookSlice = createSlice({
  name: 'textBookS',
  initialState,
  reducers: {
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
        console.log(action.payload);
        const newState = state;
        newState.cards = action.payload;
      })

      .addCase(getCard.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export const {
  setGroup, setPage, setPageButtons, setIncrement, setDecrement,
} = textBookSlice.actions;
export default textBookSlice.reducer;
