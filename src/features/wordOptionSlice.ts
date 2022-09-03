import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postWordOption } from '../api/postWordOption';
import { putWordOption } from '../api/putWordOption';

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
    id: '',
    wordId: '',
    difficulty: '',
    optional: {
      rigthTime: 0,
    },
  },
};

interface IOptional {
  rigthTime: number;
}

export interface ICreateWordOptions {
  wordId: string;
  difficulty: string;
  optional: IOptional;
  id: string;
}

const wordOptionSlice = createSlice({
  name: 'hardsLearnedWords',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postWordOption.pending, (state) => {
        console.log('pending');
        state.successfulUpdate = 'pending';
      })

      .addCase(postWordOption.fulfilled, (state, action) => {
        console.log('post', action.payload);
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
        console.log('put', action.payload);

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
