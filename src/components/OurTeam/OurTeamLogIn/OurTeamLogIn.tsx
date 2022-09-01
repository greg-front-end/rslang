import React from 'react';

import GregImg from '../../../assets/img/our_team/greg.png';
import LilithImg from '../../../assets/img/our_team/lilith1.png';
import MaikleImg from '../../../assets/img/our_team/maikle.jpg';
import TeamImg from '../../../assets/img/our_team/out-team-log-in.png';

import styleLogOut from '../../../style/log_out.module.css';
import style from './style.module.css';

export const OurTeamLogIn = () => (
  <div className={style.team} id="our-team">
    <div className={`${style.team_container} container`}>
      <div className="container_login">
        <h2 className={`${styleLogOut.title} ${style.title} title`}>
          Our team
        </h2>
        <div className={style.wrapper}>
          <div className={style.team_content}>
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
          <div className={`${style.team_img_wrapper}`}>
            <img src={TeamImg} alt="Man read books" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
