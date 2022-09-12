import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { IWordsItem } from '../../../../../types/IWordsItem';

import styles from './Btn.module.css';

interface IBtnProps {
  btn: string;
  currentWord: IWordsItem;
  getAnswer: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isHide: boolean[];
  i: number;
}

export const Btn = ({
  btn, currentWord, getAnswer, isHide, i,
}: IBtnProps) => {
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  const compair = (word: string) => word === currentWord.wordTranslate;

  const rightOrWrong = (word: string) => (compair(word) ? '✔' : '✘');

  const greenOrRed = (word: string) => (compair(word) ? styles.green : styles.red);

  const signStyle = {
    color: 'transparent',
  };

  const btnStyle = {
    background: 'white',
  };

  return (
    <button
      type="button"
      className={`${styles.btn} ${nextWord ? styles.btn_disable : undefined}`}
      key={nanoid()}
      onClick={(e) => getAnswer(e)}
      id={i.toString()}
      style={isHide[i] ? undefined : btnStyle}
    >
      <span
        className={`${styles.sign} ${greenOrRed(btn)}`}
        style={isHide[i] ? signStyle : undefined}
      >
        {rightOrWrong(btn)}
      </span>
      <span className={styles.word}>{btn}</span>
    </button>
  );
};
