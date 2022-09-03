import React, { useEffect } from 'react';

import { postWordOption } from '../../api/postWordOption';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { IWordsItem } from '../../types/IWordsItem';

import { Table } from './Table/Table';
import { wordStatisticRight } from './utils/wordStatisticRigth';
import { wordStatisticWrong } from './utils/wordStatisticWrong';

import styles from './ResultsTable.module.css';

interface IResultsTableProps {
  right: IWordsItem[];
  wrong: IWordsItem[];
}

export const ResultsTable = ({ right, wrong }: IResultsTableProps) => {
  const dispatch = useAppDispatch();

  const sendGameStatistic = () => {
    right.forEach((word) => dispatch(postWordOption(wordStatisticRight(word))));
    wrong.forEach((word) => dispatch(postWordOption(wordStatisticWrong(word))));
  };

  useEffect(() => {
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
