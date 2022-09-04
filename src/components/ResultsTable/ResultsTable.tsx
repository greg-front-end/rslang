import React, { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { getEasyWords } from '../../api/getEasyWords';
import { postWordOption } from '../../api/postWordOption';
import { putUserStatistic } from '../../api/putUserStatistic';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { GamesName } from '../../types/GamesName';
import { IWordsItem } from '../../types/IWordsItem';
import { GameStatistics } from '../../types/Statistic';

import { Table } from './Table/Table';
import { getGameStatistic } from './utils/getGameStatistic';
import { wordStatisticRight } from './utils/wordStatisticRigth';
import { wordStatisticWrong } from './utils/wordStatisticWrong';

import styles from './ResultsTable.module.css';

interface IResultsTableProps {
  right: IWordsItem[];
  wrong: IWordsItem[];
  inRow: number;
  game: GamesName;
}

export const ResultsTable = ({
  right, wrong, inRow, game,
}: IResultsTableProps) => {
  const dispatch = useAppDispatch();
  const statistic = useAppSelector((state) => state.statistic.statistic);

  dispatch(getEasyWords());
  const rightWordStatistics = right.map((word) => wordStatisticRight(word));
  const wrongWordStatistics = wrong.map((word) => wordStatisticWrong(word));
  const words = rightWordStatistics.filter(({ isNew }) => isNew).length
    + wrongWordStatistics.filter(({ isNew }) => isNew).length;
  const sendWordsStatistic = () => {
    rightWordStatistics.forEach(({ obj }) => dispatch(postWordOption(obj)));
    wrongWordStatistics.forEach(({ obj }) => dispatch(postWordOption(obj)));
  };
  const inAccuracy = (right.length * 100) / (right.length + wrong.length);

  const newGameStatistic: GameStatistics = { inRow, words, inAccuracy };

  const statisticObject = getGameStatistic({ statistic, newGameStatistic, game });

  const sendGameStatistic = () => {
    dispatch(putUserStatistic(statisticObject));
  };

  useEffect(() => {
    sendWordsStatistic();
    sendGameStatistic();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={`title ${styles.section__title}`}>Results</h2>
      <div className={`frame ${styles.table__wrapper}`}>
        <Table
          words={right}
          isRight
        />
        <Table
          words={wrong}
          isRight={false}
        />
      </div>
    </div>
  );
};
