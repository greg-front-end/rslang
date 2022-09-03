import { configureStore } from '@reduxjs/toolkit';

import audioChallengeSlice from '../features/audioChallengeSlice';
import authSlice from '../features/authSlice';
import sideBarSlice from '../features/sideBarSlice';
import textBookSlice from '../features/textBookSlice';
import wordOptionSlice from '../features/wordOptionSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    textBook: textBookSlice,
    sideBar: sideBarSlice,
    audioChallenge: audioChallengeSlice,
    wordOption: wordOptionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
