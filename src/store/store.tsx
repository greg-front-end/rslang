import { configureStore } from '@reduxjs/toolkit';

import audioSlice from '../features/audioSlice';
import authSlice from '../features/authSlice';

export const store = configureStore({
  reducer: {
    itemAudio: audioSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
