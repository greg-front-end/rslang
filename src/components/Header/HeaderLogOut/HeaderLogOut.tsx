import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImg from '../../../assets/img/logo/dark/logo-desktop-dark.png';

import style from './style.module.css';

export const HeaderLogOut = () => (
  <header className={style.header}>
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src={LogoImg} alt="Logo RSLang" />
        </div>
        <nav className={style.nav}>
          <NavLink className={`${style.link} ${style.active}`} to="/">Home</NavLink>
          <NavLink className={style.link} to="textbook">TextBook</NavLink>
          <NavLink className={style.link} to="games">Play and learn</NavLink>
          <NavLink className={style.link} to="about">About</NavLink>
        </nav>
        <div className={style.auth_wrapper}>
          <NavLink to="log-in" className="btn">Log in</NavLink>
          <NavLink to="register" className={`${style.btn_register} btn`}>Register</NavLink>
        </div>
      </div>
    </div>
  </header>
);
