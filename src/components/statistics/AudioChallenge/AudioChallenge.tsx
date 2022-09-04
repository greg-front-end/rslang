import React, { FC } from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { GamesName } from '../../../types/GamesName';
import { Titlehallenge } from '../../TitleGames/Titlehallenge';
import { GamesStatisticsTable } from '../GamesStatisticsTable/GamesStatisticsTable';
import { getAccuracy } from '../utils/getAccuracy';
import { getInRow } from '../utils/getInRow';
import { getWords } from '../utils/getWords';

import style from './style.module.css';

export const AudioChallenge: FC = () => {
  const statistic = useAppSelector((state) => state.statistic.statistic);
  const inRow = getInRow(statistic, GamesName.Audio);
  const inAccuracy = getAccuracy(statistic, GamesName.Audio);
  const words = getWords(statistic, GamesName.Audio);
  return (
    <div className={style.audio_challenge}>
      <Titlehallenge text="Audio Challenge" icon="audio" />
      <GamesStatisticsTable inRow={inRow} inAccuracy={inAccuracy} words={words} />
    </div>
  );
};
