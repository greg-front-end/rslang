import { configureStore } from '@reduxjs/toolkit';

import audioChallengeSlice from '../features/audioChallengeSlice';
import authSlice from '../features/authSlice';
import sideBarSlice from '../features/sideBarSlice';
import sprintSlice from '../features/sprintSlice';
import statisticSlice from '../features/statisticSlice';
import textBookSlice from '../features/textBookSlice';
import wordOptionSlice from '../features/wordOptionSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    textBook: textBookSlice,
    sideBar: sideBarSlice,
    audioChallenge: audioChallengeSlice,
    wordOption: wordOptionSlice,
    statistic: statisticSlice,
    sprint: sprintSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
