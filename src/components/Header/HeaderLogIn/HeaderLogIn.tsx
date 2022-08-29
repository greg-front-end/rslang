import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as TextBookIcon } from '../../../assets/svg/dictionary.svg';
import { ReactComponent as GameControllerIcon } from '../../../assets/svg/game-controller.svg';
import { ReactComponent as HomeIcon } from '../../../assets/svg/home.svg';
import { ReactComponent as LogOutIcon } from '../../../assets/svg/log-out.svg';
import { ReactComponent as TeamIcon } from '../../../assets/svg/our-team.svg';
import { ReactComponent as SettiningsIcon } from '../../../assets/svg/set.svg';
import { logOutUser } from '../../../features/authSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

import style from './style.module.css';

export const HeaderLogIn = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? `${style.link} ${style.active}` : style.link);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <nav className={style.nav}>
          <NavLink className={activeLink} to={{ pathname: '/', hash: 'hero' }}>
            <HomeIcon />
            <span className={style.span1}>
              <span className={style.span2} />
            </span>
            Statistics
          </NavLink>
          <NavLink className={activeLink} to="textbook">
            <TextBookIcon fill="#959BA5" />
            <span className={style.span1}>
              <span className={style.span2} />
            </span>
            TextBook
          </NavLink>
          <NavLink className={activeLink} to="games">
            <GameControllerIcon fill="#959BA5" />
            <span className={style.span1}>
              <span className={style.span2} />
            </span>
            Play and learn
          </NavLink>
          <NavLink className={activeLink} to="about">
            <TeamIcon />
            <span className={style.span1}>
              <span className={style.span2} />
            </span>
            Our team
          </NavLink>
        </nav>
        <div className={style.auth_wrapper}>
          <button type="button" className={`${style.settings_btn} ${style.auth_btn}`}>
            <SettiningsIcon />
            Settings
          </button>
          <button
            type="button"
            className={`${style.settings_btn} ${style.auth_btn}`}
            onClick={() => handleLogOut()}
          >
            <LogOutIcon />
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};
