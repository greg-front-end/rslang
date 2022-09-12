import React from 'react';

import FooterImg from '../../../assets/img/footer/RocketBoy.png';
import Logo from '../../../assets/img/logo/dark/logo-desktop-dark.png';
import { ReactComponent as RsLogo } from '../../../assets/svg/rslogo.svg';

import styleLogOut from '../../../style/log_out.module.css';
import style from './style.module.css';

export const FooterLogIn = () => (
  <footer className={style.footer}>
    <div className={style.footer_wrapper}>
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
          <div className={styleLogOut.logo}>
            <img src={Logo} alt="Rocket boy" />
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        ©2022 RS LANG. RS School
        <a className={style.logo_link} href="https://rs.school/js/">
          <RsLogo />
        </a>
      </div>
    </div>
  </footer>
);
