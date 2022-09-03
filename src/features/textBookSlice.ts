import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAgregatedCard } from '../api/getAggregatedCard';
import { getCard } from '../api/getCard';
import { getHardWords } from '../api/getHardWords';
import { TextBookState } from '../types/TextBook';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';
import { setValueLocalStorage } from '../utils/setValueLocalStorage';

const initialState: TextBookState = {
  cards: [],
  hardWords: [],
  group: Number(getValueLocalStorage('group')) || 0,
  page: Number(getValueLocalStorage('page')) || 0,
  pageButtons: [0, 1, 2, 3, 4, 5, 6],
  increment: false,
  decrement: false,
  loadStatus: '',
  switchHardWords: JSON.parse(getValueLocalStorage('SwitchHardWords')!) || false,
};

const textBookSlice = createSlice({
  name: 'textBookS',
  initialState,
  reducers: {
    setGroup: (state, action: PayloadAction<number>) => {
      setValueLocalStorage('group', action.payload);
      state.group = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      setValueLocalStorage('page', action.payload);
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
    clearHardWords: (state) => {
      state.hardWords = [];
      console.log('clearHardWords');
    },
    toggleHardWords(state, action) {
      setValueLocalStorage('SwitchHardWords', action.payload);
      state.switchHardWords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state, action) => {
        console.log('pending');
        state.loadStatus = 'pending';
      })

      .addCase(getCard.fulfilled, (state, action) => {
        console.log(action.payload);

        state.cards = action.payload;
        console.log('getCard fulfilled');
        state.loadStatus = 'fulfilled';
      })

      .addCase(getCard.rejected, (state, action) => {
        console.log('rejected');
      })
      .addCase(getAgregatedCard.pending, (state, action) => {
        console.log('pending');
        state.loadStatus = 'pending';
      })

      .addCase(getAgregatedCard.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loadStatus = 'fulfilled';
      })

      .addCase(getAgregatedCard.rejected, (state, action) => {
        console.log('rejected');
      })

      .addCase(getHardWords.pending, (state, action) => {
        console.log('pending');
        state.loadStatus = 'pending';
      })

      .addCase(getHardWords.fulfilled, (state, action) => {
        state.hardWords = action.payload;
        state.loadStatus = 'fulfilled';
        console.log('hard fulfilled', action.payload);
      })

      .addCase(getHardWords.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export const {
  setGroup, setPage, setPageButtons, setIncrement, setDecrement,
  clearHardWords, toggleHardWords,
} = textBookSlice.actions;
export default textBookSlice.reducer;
