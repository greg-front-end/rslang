import React from 'react';

import ManImg from '../../assets/img/our_advantages/advantages-image.png';
import { ReactComponent as Bookmark } from '../../assets/svg/bookmark.svg';
import { ReactComponent as DictionaryIcon } from '../../assets/svg/dictionary.svg';
import { ReactComponent as FreeIcon } from '../../assets/svg/free.svg';
import { ReactComponent as GameControllerIcon } from '../../assets/svg/game-controller.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/svg/statistics.svg';

import styleLogOut from '../../style/log_out.module.css';
import style from './style.module.css';

export const OurAdvantages = () => (
  <div className={style.advant} id="our-advantages">
    <div className="container">
      <div className={`${style.bookmark_left} ${styleLogOut.bookmark}`}>
        <Bookmark fill="#2DBFAC" />
      </div>
      <div className={style.wrapper}>
        <div className={`${style.man_left} ${styleLogOut.man}`}>
          <img src={ManImg} alt="Man read books" />
        </div>
        <div className={style.advant_content}>
          <h2 className={styleLogOut.title}>
            Our
            {' '}
            <span className={styleLogOut.title_span}>advantages</span>
          </h2>
          <ul className={style.advant_items}>
            <li className={style.advant_item}>
              <span>
                <FreeIcon />
              </span>
              {' '}
              Learn English with us absolutely free
            </li>
            <li className={style.advant_item}>
              <span>
                <StatisticsIcon />
              </span>
              {' '}
              All the progress of training can be viewed in statistics,
              where data for the current day,
              as well as for the entire training period, are presented.
              The information is presented both in the form of a table and graphs,
              which is very convenient.
            </li>
            <li className={style.advant_item}>
              <span>
                <GameControllerIcon />
              </span>
              {' '}
              For learning words and reinforcing memorization, the application has 2 games:
              Sprint, Audio Chalenge, which will help you to
              &apos;pump&apos; your vocabulary in a playful way.
            </li>
            <li className={style.advant_item}>
              <span>
                <DictionaryIcon />
              </span>
              {' '}
              The electronic textbook consists of six sections.
              Each section has 30 pages of 20 words.
              The translation of the word, the thematic image, as well as the pronunciation
              of both the word separately and as part of the phrase are presented.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
