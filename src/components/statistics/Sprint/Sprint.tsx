import React, { FC } from 'react';

import { Titlehallenge } from '../../TitleGames/Titlehallenge';
import { GamesStatisticsTable } from '../GamesStatisticsTable/GamesStatisticsTable';

import style from './style.module.css';

export const Sprint: FC = () => (
  <div className={style.sprint}>
    <Titlehallenge text="Sprint" icon="sprint" />
    <GamesStatisticsTable value={0} />
  </div>
);
