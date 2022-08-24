import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  audio: HTMLAudioElement;
}

const initialState: IState = {
  audio: new Audio(),
};

const audioSlice = createSlice({
  name: 'itemAudio',
  initialState,
  reducers: {
    stopAudio(state, action: PayloadAction<HTMLAudioElement>) {
      const newState = state;
      state.audio.pause();
      newState.audio.currentTime = 0;
      newState.audio = action.payload as Draft<HTMLAudioElement>;
    },
  },
});

export const { stopAudio } = audioSlice.actions;
export default audioSlice.reducer;
