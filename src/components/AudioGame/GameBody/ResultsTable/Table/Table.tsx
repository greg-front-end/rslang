import React from 'react';

import { IWordsItem } from '../../../../../types/IWordsItem';

import styles from './Table.module.css';

interface ITableProps {
  words: IWordsItem[];
  isRight: boolean;
}

export const Table = ({ words, isRight }: ITableProps) => (
  <div className={`${styles.table}`}>
    <h4
      className={`${styles.title} ${isRight ? styles.title__right : styles.title__wrong}`}
    >
      {isRight ? 'Right' : 'Wrong'}
    </h4>
    {words.map((el, i) => (
      <>
        <div className={styles.counter}>{i + 1}</div>
        <div>{el.word}</div>
        <div>{el.wordTranslate}</div>
      </>
    ))}
  </div>
);
