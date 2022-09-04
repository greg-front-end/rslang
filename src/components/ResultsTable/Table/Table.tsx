import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

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
        <div key={nanoid()}>
          <div className={styles.counter}>{i + 1}</div>
          <div>{el.word}</div>
          <div>{el.wordTranslate}</div>
        </div>
      ))
      : <div>none</div>}
  </div>
);
