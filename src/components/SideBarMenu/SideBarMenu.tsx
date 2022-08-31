import React from 'react';

import { ReactComponent as MenuIcon } from '../../assets/svg/header/menu.svg';
import { toggleSideBar } from '../../features/sideBarSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { isUserLogIn } from '../../utils/isUserLogIn';

import style from './style.module.css';

export const SideBarMenu = () => {
  const isOpenSideBar = useAppSelector((state) => state.sideBar.isActiveSideBar);
  const dispatch = useAppDispatch();
  const handleMenu = () => {
    dispatch(toggleSideBar(!isOpenSideBar));
  };
  return (
    <button
      className={isUserLogIn() ? style.menu_btn : style.menu_btn_log_out}
      type="button"
      onClick={handleMenu}
    >
      <span>
        {' '}
        <MenuIcon />
      </span>
      <span className={style.menu_text}>Dashboard</span>
    </button>
  );
};
