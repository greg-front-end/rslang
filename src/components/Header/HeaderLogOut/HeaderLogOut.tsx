import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link className={`${style.link} ${style.active}`} to="/">Home</Link>
          <Link className={style.link} to="textbook">TextBook</Link>
          <Link className={style.link} to="games">Play and learn</Link>
          <Link className={style.link} to="about">About</Link>
        </nav>
        <div className={style.auth_wrapper}>
          <button type="button" className="btn">Log in</button>
          <button type="button" className={`${style.btn_register} btn`}>Register</button>
        </div>
      </div>
    </div>
  </header>
);
