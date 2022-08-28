import { configureStore } from '@reduxjs/toolkit';

import audioChallengeSlice from '../features/audioChallengeSlice';
import audioSlice from '../features/audioSlice';
import authSlice from '../features/authSlice';
import textBookSlice from '../features/textBookSlice';

export const store = configureStore({
  reducer: {
    itemAudio: audioSlice,
    auth: authSlice,
    textBook: textBookSlice,
    audioChallenge: audioChallengeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
