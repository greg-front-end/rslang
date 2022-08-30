import React, { FC } from 'react';

import { Titlehallenge } from '../../TitleGames/Titlehallenge';
import { GamesStatisticsTable } from '../GamesStatisticsTable/GamesStatisticsTable';

import style from './style.module.css';

export const AudioChallenge: FC = () => (
  <div className={style.audio_challenge}>
    <Titlehallenge text="Audio Challenge" icon="audio" />
    <GamesStatisticsTable value={0} />
  </div>
);
