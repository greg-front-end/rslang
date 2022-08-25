import React from 'react';

import Logo from '../../../assets/img/logo/dark/logo-desktop-dark.png';

import FooterImg from './footer-img.png';

import style from './style.module.css';

export const FooterLogOut = () => (
  <footer className={style.footer}>
    <div className="container">
      <div className={style.wrapper}>
        <img src={FooterImg} alt="Rocket boy" />
        <div className={style.team}>
          <a href="https://github.com/maiklshetinin" target="_blank" rel="noopener noreferrer">maiklshetinin</a>
          <a href="https://github.com/LilithPrimary" target="_blank" rel="noopener noreferrer">
            <span>Denna</span>
            LilithPrimary
          </a>
          <a href="https://github.com/greg-front-end" target="_blank" rel="noopener noreferrer">
            <span>Greg Martinos</span>
            greg-front-end
          </a>
        </div>
        <div className={style.footer_nav}>
          <nav className={style.nav}>
            <a className="link_out" href="#hero">Home</a>
            <a className="link_out" href="#our-advantages">Our advantages</a>
            <a className="link_out" href="#about-us">About us</a>
          </nav>
        </div>
        <img src={Logo} alt="Rocket boy" />
      </div>
    </div>
  </footer>
);
