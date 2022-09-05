import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postWordOption } from '../api/postWordOption';
import { putWordOption } from '../api/putWordOption';
import { ICreateWordOptions, IWordOptional } from '../types/ICreateWordOptions';

interface wordOptionState {
  id: string;
  error: string,
  wordId: string;
  successfulUpdate: string;
  difficultState: ICreateWordOptions;
}

const initialState: wordOptionState = {
  id: '',
  wordId: '',
  error: '',
  successfulUpdate: '',
  difficultState: {
    wordId: '',
    difficulty: '',
    optional: {
      right: 0,
      wrong: 0,
      rightInRow: 0,
    },
  },
};

const wordOptionSlice = createSlice({
  name: 'hardsLearnedWords',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postWordOption.pending, (state) => {
        state.successfulUpdate = 'pending';
      })

      .addCase(postWordOption.fulfilled, (state, action) => {
        state.difficultState = action.payload;
        state.successfulUpdate = 'fulfilled';
      })

      .addCase(postWordOption.rejected, (state, action) => {
        console.log(action.payload);
      })

      .addCase(putWordOption.pending, (state) => {
        console.log('pending');
        state.successfulUpdate = 'pending';
      })

      .addCase(putWordOption.fulfilled, (state, action) => {
        state.difficultState = action.payload;
        state.successfulUpdate = 'fulfilled';
      })

      .addCase(putWordOption.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

// export const {  } = wordOptionSlice.actions;
export default wordOptionSlice.reducer;
