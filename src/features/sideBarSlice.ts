import { createSlice } from '@reduxjs/toolkit';

type IsActiveSideBar = {
  isActiveSideBar: boolean
}

const initialState: IsActiveSideBar = {
  isActiveSideBar: false,
};

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar(state, { payload }) {
      state.isActiveSideBar = payload;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
