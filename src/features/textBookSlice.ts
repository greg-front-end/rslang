import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAgregatedCard } from '../api/getAggregatedCard';
import { getCard } from '../api/getCard';
import { getHardWords } from '../api/getHardWords';
import { IWordsItem } from '../types/IWordsItem';

export type TextBookState = {
  cards: IWordsItem[];
  hardWords: IWordsItem[],
  group: number,
  page: number,
  pageButtons: number[],
  increment: boolean,
  decrement: boolean,
  isLoad: boolean,
}

const initialState: TextBookState = {
  cards: [],
  hardWords: [],
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
        state.cards = action.payload;
        state.isLoad = true;
      })

      .addCase(getCard.rejected, (state, action) => {
        console.log('rejected');
      })
      .addCase(getAgregatedCard.pending, (state, action) => {
        console.log('pending');
      })

      .addCase(getAgregatedCard.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cards = action.payload;
        state.isLoad = true;
      })

      .addCase(getAgregatedCard.rejected, (state, action) => {
        console.log('rejected');
      })

      .addCase(getHardWords.pending, (state, action) => {
        console.log('pending');
      })

      .addCase(getHardWords.fulfilled, (state, action) => {
        state.hardWords = action.payload;
        console.log('fulfilled');
      })

      .addCase(getHardWords.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export const {
  setGroup, setPage, setPageButtons, setIncrement, setDecrement, resetLoad,
} = textBookSlice.actions;
export default textBookSlice.reducer;
