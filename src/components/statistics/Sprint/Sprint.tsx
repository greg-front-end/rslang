import React, { FC } from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { GamesName } from '../../../types/GamesName';
import { Titlehallenge } from '../../TitleGames/Titlehallenge';
import { GamesStatisticsTable } from '../GamesStatisticsTable/GamesStatisticsTable';
import { getAccuracy } from '../utils/getAccuracy';
import { getInRow } from '../utils/getInRow';
import { getWords } from '../utils/getWords';

import style from './style.module.css';

export const Sprint: FC = () => {
  const statistic = useAppSelector((state) => state.statistic.statistic);
  const inRow = getInRow(statistic, GamesName.Sprint);
  const inAccuracy = getAccuracy(statistic, GamesName.Sprint);
  const words = getWords(statistic, GamesName.Sprint);
  return (
    <div className={style.sprint}>
      <Titlehallenge text="Sprint" icon="sprint" />
      <GamesStatisticsTable inRow={inRow} inAccuracy={inAccuracy} words={words} />
    </div>
  );
};
