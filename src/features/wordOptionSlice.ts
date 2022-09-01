import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addWordOption } from '../api/addWordOption';

interface wordOptionState {
  id: string;
  difficulty: string;
  wordId: string;
}

const initialState: wordOptionState = {
  id: '',
  difficulty: '',
  wordId: '',
};

const wordOptionSlice = createSlice({
  name: 'textBookS',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWordOption.pending, (state) => {
        console.log('pending');
      })

      .addCase(addWordOption.fulfilled, (state, action) => {
        console.log(action.payload);
      })

      .addCase(addWordOption.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

// export const {} = textBookSlice.actions;
export default wordOptionSlice.reducer;
