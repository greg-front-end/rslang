import { configureStore } from '@reduxjs/toolkit';

import audioSlice from '../features/audioSlice';

export const store = configureStore({
  reducer: {
    itemAudio: audioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
