import { configureStore } from '@reduxjs/toolkit';

import audioSlice from '../features/audioSlice';
import authSlice from '../features/authSlice';
import textBookSlice from '../features/textBookSlice';

export const store = configureStore({
  reducer: {
    itemAudio: audioSlice,
    auth: authSlice,
    textBook: textBookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
