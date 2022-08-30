import React, { FC } from 'react';

import { ReactComponent as AudioIcon } from '../../../assets/svg/games/audio-chanllenge.svg';
import { Titlehallenge } from '../../TitleGames/Titlehallenge';

import styleGameStatistics from '../../../style/games_statistics.module.css';
import style from './style.module.css';

export const WordsLearned: FC = () => (
  <div className={style.audio_challenge}>
    <Titlehallenge text="Audio Challenge" icon="audio" />
    <ul className={styleGameStatistics.state_list}>
      <li className={styleGameStatistics.state_list_item}>
        <span className={styleGameStatistics.staet_list_int}>0</span>
        <span className={styleGameStatistics.staet_list_text}>in row</span>
      </li>
      <li className={styleGameStatistics.state_list_item}>
        <span className={styleGameStatistics.staet_list_int}>0</span>
        <span className={styleGameStatistics.staet_list_text}>in accuracy</span>
      </li>
      <li className={styleGameStatistics.state_list_item}>
        <span className={styleGameStatistics.staet_list_int}>0</span>
        <span className={styleGameStatistics.staet_list_text}>words</span>
      </li>
    </ul>
  </div>
);
