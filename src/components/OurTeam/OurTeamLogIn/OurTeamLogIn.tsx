import React from 'react';

import GregImg from '../../../assets/img/our_team/greg.png';
import LilithImg from '../../../assets/img/our_team/lilith1.png';
import MaikleImg from '../../../assets/img/our_team/maikle.jpg';
import TeamImg from '../../../assets/img/our_team/out-team-log-in.png';
import { UserInfo } from '../../UserInfo/UserInfo';

import styleLogOut from '../../../style/log_out.module.css';
import style from './style.module.css';

export const OurTeamLogIn = () => (
  <div className={style.team} id="our-team">
    <div className={`${style.team_container} container`}>
      <div className={style.team_header_wrapper}>
        <div className={style.title_wrapper}>
          <h2 className={`${styleLogOut.title} ${style.title} title`}>
            Our team
          </h2>
        </div>
        <div className={style.user_info_wrapper}>
          <UserInfo />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.team_content}>
          <ul className={style.team_items}>
            <li className={style.team_item}>
              <a className={styleLogOut.link} href="https://github.com/greg-front-end" target="_blank" rel="noopener noreferrer">
                <span className={style.avatar}>
                  <img src={GregImg} alt="Greg developer" />
                </span>
              </a>
              Greg Martinos. Teamlead. Design, layout, UI, authorization,
              registration, api, backend manipulation, routing, teammates support.
            </li>
            <li className={style.team_item}>
              <a className={styleLogOut.link} href="https://github.com/LilithPrimary" target="_blank" rel="noopener noreferrer">
                <span className={style.avatar}>
                  <img src={LilithImg} alt="Lilith developer" />
                </span>
              </a>
              Lilith Primary. Word cards, audio-challenge, settings, statistics.
            </li>
            <li className={style.team_item}>
              <a className={styleLogOut.link} href="https://github.com/maiklshetinin" target="_blank" rel="noopener noreferrer">
                <span className={style.avatar}>
                  <img src={MaikleImg} alt="Maikle developer" />
                </span>
              </a>
              Maikl Shetinin. Words book, sprint, api.
            </li>
          </ul>
        </div>
        <div className={`${style.team_img_wrapper}`}>
          <img src={TeamImg} alt="Man read books" />
        </div>
      </div>
    </div>
  </div>
);
