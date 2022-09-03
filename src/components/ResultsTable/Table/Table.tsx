import React from 'react';

import { AppDispatch } from '../../../store/store';
import { IWordsItem } from '../../../types/IWordsItem';
import { Word } from '../../AudioGame/GameBody/WordItems/Word/Word';

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
    {words.length
      ? words.map((el, i) => (
        <>
          <div className={styles.counter} key={Date.now()}>{i + 1}</div>
          <div key={Date.now()}>{el.word}</div>
          <div key={Date.now()}>{el.wordTranslate}</div>
        </>
      ))
      : <div>none</div>}
  </div>
);