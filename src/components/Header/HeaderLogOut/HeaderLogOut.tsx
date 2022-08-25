import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImg from '../../../assets/img/logo/dark/logo-desktop-dark.png';

import style from './style.module.css';

export const HeaderLogOut = () => {
  const activeLink = ({ isActive }: {isActive: boolean}) => (isActive ? `${style.link} ${style.active}` : style.link);
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.logo}>
            <img src={LogoImg} alt="Logo RSLang" />
          </div>
          <nav className={style.nav}>
            <NavLink className={activeLink} to="/">Home</NavLink>
            <NavLink className={activeLink} to="textbook">TextBook</NavLink>
            <NavLink className={activeLink} to="games">Play and learn</NavLink>
            <NavLink className={activeLink} to="about">About</NavLink>
          </nav>
          <div className={style.auth_wrapper}>
            <NavLink to="log-in" className="auth_link btn">Log in</NavLink>
            <NavLink to="register" className={`${style.btn_register} auth_link btn`}>Register</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
