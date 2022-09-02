import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postWordOption } from '../api/postWordOption';
import { putWordOption } from '../api/putWordOption';

interface wordOptionState {
  id: string;
  error: string,
  wordId: string;
  difficultState: ICreateWordOptions;
}

const initialState: wordOptionState = {
  id: '',
  wordId: '',
  error: '',
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
      .addCase(postWordOption.pending, () => {
        console.log('pending');
      })

      .addCase(postWordOption.fulfilled, (state, action) => {
        console.log('post', action.payload);
        state.difficultState = action.payload;
      })

      .addCase(postWordOption.rejected, (state, action) => {
        console.log(action.payload);
      })

      .addCase(putWordOption.pending, () => {
        console.log('pending');
      })

      .addCase(putWordOption.fulfilled, (state, action) => {
        console.log('put', action.payload);
        state.difficultState = action.payload;
      })

      .addCase(putWordOption.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

// export const {} = textBookSlice.actions;
export default wordOptionSlice.reducer;
