import React from 'react';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import styles from './WordItems.module.css';

const firstLetToUpCase = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const Word = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  const isStop = useAppSelector((state) => state.audioChallenge.timerStop);

  return (
    <span
      className={isStop ? styles.word : styles.word_hide}
    >
      {firstLetToUpCase(item.word)}
    </span>
  );
};
