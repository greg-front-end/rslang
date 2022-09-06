import { createSlice } from '@reduxjs/toolkit';

import { putUserSettings } from '../api/putUserSettings';
import { LoadStatus } from '../types/LoadStatus';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

interface IState {
  avatar: string;
  loadStatus: LoadStatus;
}

const initialState: IState = {
  avatar: '',
  loadStatus: LoadStatus.rejected,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setAvatar(state, action) {
      const id = JSON.parse(getValueLocalStorage('UserId') as string);
      state.avatar = action.payload;
      localStorage.setItem(`${id}avatar`, JSON.stringify(action.payload));
    },
    getAvatar(state) {
      const id = JSON.parse(getValueLocalStorage('UserId') as string);
      state.avatar = localStorage.getItem(`${id}avatar`)
        ? JSON.parse(localStorage.getItem(`${id}avatar`) as string)
        : '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(putUserSettings.pending, (state) => {
        state.loadStatus = LoadStatus.pending;
      })

      .addCase(putUserSettings.fulfilled, (state, action) => {
        state.avatar = action.payload;
        state.loadStatus = LoadStatus.fulfilled;
      });
  },
});

export const { setAvatar, getAvatar } = settingsSlice.actions;
export default settingsSlice.reducer;
