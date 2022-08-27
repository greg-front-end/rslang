import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCard } from '../api/getCard';
import { IWordsItem } from '../types/IWordsItem';

export type TextBookState = {
  cards: IWordsItem[];
  group: number,
  page: number,
}

const initialState: TextBookState = {
  cards: [],
  group: 0,
  page: 0,
};

const textBookSlice = createSlice({
  name: 'textBookS',
  initialState,
  reducers: {
    setGroup: (state, action: PayloadAction<number>) => {
      console.log(action);
      const newState = state;
      newState.group = action.payload;
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
        console.log('fulfilled');
      })

      .addCase(getCard.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export const { setGroup } = textBookSlice.actions;
export default textBookSlice.reducer;
