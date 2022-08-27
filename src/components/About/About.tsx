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
              <span className={style.avatar}>
                <img src={GregImg} alt="Greg developer" />
              </span>
              Learn English with us absolutely free
            </li>
            <li className={style.team_item}>
              <span className={style.avatar}>
                <img src={LilithImg} alt="Lilith developer" />
              </span>
              All the progress of training can be viewed in statistics,
              where data for the current day,

            </li>
            <li className={style.team_item}>
              <span className={style.avatar}>
                <img src={MaikleImg} alt="Maikle developer" />
              </span>
              For learning words and reinforcing memorization, the application has 2 games:
              Sprint, Audio Chalenge, which will help you to
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
