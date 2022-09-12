import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postWordOption } from '../api/postWordOption';
import { putWordOption } from '../api/putWordOption';
import { ICreateWordOptions, IWordOptional } from '../types/ICreateWordOptions';
import { LoadStatus } from '../types/LoadStatus';

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
        state.successfulUpdate = LoadStatus.pending;
      })

      .addCase(postWordOption.fulfilled, (state, action) => {
        state.difficultState = action.payload;
        state.successfulUpdate = LoadStatus.fulfilled;
      })

      .addCase(putWordOption.pending, (state) => {
        state.successfulUpdate = LoadStatus.pending;
      })

      .addCase(putWordOption.fulfilled, (state, action) => {
        state.difficultState = action.payload;
        state.successfulUpdate = LoadStatus.fulfilled;
      });
  },
});

// export const {  } = wordOptionSlice.actions;
export default wordOptionSlice.reducer;
