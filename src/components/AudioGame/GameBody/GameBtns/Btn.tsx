import React from 'react';

import { IWordsItem } from '../../../../types/IWordsItem';

import styles from './GameBtns.module.css';

interface IBtnProps {
  btn: string;
  currentWord: IWordsItem;
  getAnswer: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Btn = ({ btn, currentWord, getAnswer }: IBtnProps) => {
  const compair = (word: string) => word === currentWord.wordTranslate;

  const rightOrWrong = (word: string) => (compair(word) ? '✔' : '✘');

  const greenOrRed = (word: string) => (compair(word) ? styles.green : styles.red);

  return (
    <button
      type="button"
      className={`${styles.btn}`}
      key={Math.random()}
      onClick={(e) => getAnswer(e)}
    >
      <span
        className={`${styles.sign} ${greenOrRed(btn)} ${styles.hide}`}
      >
        {rightOrWrong(btn)}
      </span>
      <p className={styles.word}>{btn}</p>
    </button>
  );
};
