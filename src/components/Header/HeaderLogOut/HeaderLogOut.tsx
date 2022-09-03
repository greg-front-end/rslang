import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import LogoImg from '../../../assets/img/logo/dark/logo-desktop-dark.png';
import { toggleSideBar } from '../../../features/sideBarSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { SideBarMenu } from '../../SideBarMenu/SideBarMenu';

import styleLogOut from '../../../style/log_out.module.css';
import style from './style.module.css';

export const HeaderLogOut = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? `${styleLogOut.link} ${style.active}` : styleLogOut.link);

  const [isActiveBgColor, setIsActiveBgColor] = useState(false);
  const [isSideBarBtnActive, setIsSideBarBtnActive] = useState(false);
  const isSideBarActive = useAppSelector((state) => state.sideBar.isActiveSideBar);
  const dispatch = useAppDispatch();
  const changeBackground = () => {
    if (window.scrollY > 75) {
      setIsActiveBgColor(true);
    } else {
      setIsActiveBgColor(false);
    }
  };
  const showSideBarBtn = () => {
    if (window.innerWidth <= 900) {
      setIsSideBarBtnActive(true);
    } else {
      setIsSideBarBtnActive(false);
    }
  };
  const showSideBar = () => dispatch(toggleSideBar(!isSideBarActive));
  useEffect(() => {
    showSideBarBtn();
    changeBackground();
  }, []);
  window.addEventListener('resize', showSideBarBtn);
  window.addEventListener('scroll', changeBackground);
  return (
    <header className={isActiveBgColor ? `${style.header} ${style.header_active}` : style.header}>
      <div className="container">
        <div className={style.wrapper}>
          {isSideBarBtnActive
            && (
            <div className={style.dashboard}>
              <SideBarMenu />
            </div>
            )}
          {!isSideBarBtnActive
            && (
            <div className={style.logo}>
              <img src={LogoImg} alt="Logo RSLang" />
            </div>
            )}
          <nav className={isSideBarActive ? `${style.nav} ${style.nav_active}` : style.nav}>
            <NavLink className={activeLink} onClick={showSideBar} to={{ pathname: '/', hash: 'hero' }}>Home</NavLink>
            <NavLink className={activeLink} onClick={showSideBar} to="textbook">TextBook</NavLink>
            <NavLink className={activeLink} onClick={showSideBar} to="games">Play and learn</NavLink>
            <a className={styleLogOut.link} onClick={showSideBar} href="/#our-team">Our team</a>
          </nav>
          <div className={style.auth_wrapper}>
            <NavLink to="log-in" className={`${style.auth_link} btn`}>Log in</NavLink>
            <NavLink to="register" className={`${style.btn_register} ${style.auth_link} btn`}>Register</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
