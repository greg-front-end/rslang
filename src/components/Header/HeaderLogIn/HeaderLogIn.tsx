import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { ReactComponent as TextBookIcon } from '../../../assets/svg/dictionary.svg';
import { ReactComponent as GameControllerIcon } from '../../../assets/svg/game-controller.svg';
import { ReactComponent as HomeIcon } from '../../../assets/svg/home.svg';
import { ReactComponent as LogOutIcon } from '../../../assets/svg/log-out.svg';
import { ReactComponent as TeamIcon } from '../../../assets/svg/our-team.svg';
import { ReactComponent as SettiningsIcon } from '../../../assets/svg/set.svg';
import { logOutUser } from '../../../features/authSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { SideBarMenu } from '../../SideBarMenu/SideBarMenu';

import style from './style.module.css';

export const HeaderLogIn = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? `${style.link} ${style.active}` : style.link);
  const isActiveSideBar = useAppSelector((state) => state.sideBar.isActiveSideBar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/log-in');
    dispatch(logOutUser());
  };
  return (
    <header className={isActiveSideBar ? `${style.header_active} header_active` : style.header}>
      <div className={style.wrapper}>
        <SideBarMenu />
        <nav className={isActiveSideBar ? style.nav_active : style.nav}>
          <NavLink className={activeLink} to={{ pathname: '/', hash: 'hero' }}>
            <HomeIcon />
            <span className={isActiveSideBar ? style.span1_active : style.span1}>
              <span className={isActiveSideBar ? style.span2_active : style.span2} />
            </span>
            { isActiveSideBar && <span>Statistics</span>}
          </NavLink>
          <NavLink className={activeLink} to="textbook">
            <TextBookIcon fill="#959BA5" />
            <span className={isActiveSideBar ? style.span1_active : style.span1}>
              <span className={isActiveSideBar ? style.span2_active : style.span2} />
            </span>
            { isActiveSideBar && <span>TextBook</span>}
          </NavLink>
          <NavLink className={activeLink} to="games">
            <GameControllerIcon fill="#959BA5" />
            <span className={isActiveSideBar ? style.span1_active : style.span1}>
              <span className={isActiveSideBar ? style.span2_active : style.span2} />
            </span>
            { isActiveSideBar && <span>Play and learn</span>}
          </NavLink>
          <NavLink className={activeLink} to="about">
            <TeamIcon />
            <span className={isActiveSideBar ? style.span1_active : style.span1}>
              <span className={isActiveSideBar ? style.span2_active : style.span2} />
            </span>
            { isActiveSideBar && <span>Our team</span>}
          </NavLink>
        </nav>
        <div className={style.auth_wrapper}>
          <NavLink to="settings" className={`${style.settings_btn} ${style.auth_btn}`}>
            <SettiningsIcon />
            { isActiveSideBar && <span>Settings</span>}
          </NavLink>
          <button
            type="button"
            className={`${style.settings_btn} ${style.auth_btn}`}
            onClick={() => handleLogOut()}
          >
            <LogOutIcon />
            { isActiveSideBar && <span>Log out</span>}
          </button>
        </div>
      </div>
    </header>
  );
};
