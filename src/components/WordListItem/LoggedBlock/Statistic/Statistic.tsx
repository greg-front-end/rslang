import React from 'react';

import { IWordsItem } from '../../../../types/IWordsItem';
import Line from '../../img/line.svg';

import styles from './Statistic.module.css';

interface IStatisticProps {
  item: IWordsItem;
}

export const Statistic = ({ item }: IStatisticProps) => {
  let right: number;
  let wrong: number;
  if (item.userWord) {
    if (item.userWord.optional.right) {
      right = item.userWord.optional.right;
      wrong = item.userWord.optional.wrong;
    } else {
      right = 0;
      wrong = 0;
    }
  } else {
    right = 0;
    wrong = 0;
  }
  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>Mini games statistics:</h6>
      <div className={styles.table}>
        <span className={`${styles.right} ${styles.item}`}>Right</span>
        <img src={Line} alt="----" className={styles.line} />
        <span className={`${styles.right} ${styles.points}`}>{right}</span>
        <span className={`${styles.wrong} ${styles.item}`}>Wrong</span>
        <img src={Line} alt="----" className={styles.line} />
        <span className={`${styles.wrong} ${styles.points}`}>{wrong}</span>
      </div>
    </div>
  );
};
