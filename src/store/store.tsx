import { configureStore } from '@reduxjs/toolkit';

import audioSlice from '../features/audioSlice';
import textBookSlice from '../features/textBookSlice';

export const store = configureStore({
  reducer: {
    itemAudio: audioSlice,
    textBook: textBookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
