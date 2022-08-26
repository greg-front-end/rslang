import React from 'react';

import Logo from '../../../assets/img/logo/dark/logo-desktop-dark.png';

import FooterImg from './RocketBoy.png';
import { ReactComponent as RsLogo } from './rslogo.svg';

import styleLogOut from '../../../style/log_out.module.css';
import style from './style.module.css';

export const FooterLogOut = () => (
  <footer className={style.footer}>
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.rocket_img}>
          <img src={FooterImg} alt="Rocket boy" />
        </div>
        <div className={style.team}>
          <h4 className={style.title}>Team</h4>
          <div className={style.team_links}>
            <a className={styleLogOut.link} href="https://github.com/maiklshetinin" target="_blank" rel="noopener noreferrer">maiklshetinin</a>
            <a className={styleLogOut.link} href="https://github.com/LilithPrimary" target="_blank" rel="noopener noreferrer">
              LilithPrimary
            </a>
            <a className={styleLogOut.link} href="https://github.com/greg-front-end" target="_blank" rel="noopener noreferrer">
              greg-front-end
            </a>
          </div>
        </div>
        <div className={style.footer_nav}>
          <h4 className={style.title}>Menu</h4>
          <nav className={style.nav}>
            <a className={styleLogOut.link} href="#hero">Home</a>
            <a className={styleLogOut.link} href="#our-advantages">Our advantages</a>
            <a className={styleLogOut.link} href="#our-team">Our team</a>
          </nav>
        </div>
        <div className={styleLogOut.logo}>
          <img src={Logo} alt="Rocket boy" />
        </div>
      </div>
    </div>
    <div className={style.copyright}>
      ©2022 RS LANG. RS School
      <RsLogo />
    </div>
  </footer>
);
