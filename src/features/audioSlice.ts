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
      state.audio.pause();
      state.audio.currentTime = 0;
      state.audio = action.payload as Draft<HTMLAudioElement>;
    },
  },
});

export const { stopAudio } = audioSlice.actions;
export default audioSlice.reducer;
