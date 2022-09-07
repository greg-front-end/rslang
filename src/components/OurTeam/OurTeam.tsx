import React from 'react';

import ManImg from '../../assets/img/our_team/about-man.png';
import GregImg from '../../assets/img/our_team/greg.png';
import LilithImg from '../../assets/img/our_team/lilith1.png';
import MaikleImg from '../../assets/img/our_team/maikle.jpg';
import { ReactComponent as Bookmark } from '../../assets/svg/bookmark.svg';

import styleLogOut from '../../style/log_out.module.css';
import style from './style.module.css';

export const OurTeam = () => (
  <div className={style.team} id="our-team">
    <div className="container">
      <div className={`${style.bookmark_right} ${styleLogOut.bookmark}`}>
        <Bookmark fill="#F1EC83" />
      </div>
      <div className={style.wrapper}>
        <div className={style.team_content}>
          <h2 className={styleLogOut.title}>
            Our
            {' '}
            <span className={styleLogOut.title_span}>Team</span>
          </h2>
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
        <div className={`${style.man_right} ${styleLogOut.man}`}>
          <img src={ManImg} alt="Man read books" />
        </div>
      </div>
    </div>
  </div>
);
