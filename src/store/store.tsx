import { configureStore } from '@reduxjs/toolkit';

import audioChallengeSlice from '../features/audioChallengeSlice';
import audioSlice from '../features/audioSlice';
import authSlice from '../features/authSlice';
import sideBarSlice from '../features/sideBarSlice';
import textBookSlice from '../features/textBookSlice';

export const store = configureStore({
  reducer: {
    itemAudio: audioSlice,
    auth: authSlice,
    textBook: textBookSlice,
    sideBar: sideBarSlice,
    audioChallenge: audioChallengeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
