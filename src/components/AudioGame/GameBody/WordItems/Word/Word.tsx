import React from 'react';

import { useAppSelector } from '../../../../../hooks/useAppSelector';

import styles from './Word.module.css';

const firstLetToUpCase = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const Word = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);

  return (
    <span
      className={nextWord ? styles.word : styles.word_hide}
    >
      {firstLetToUpCase(item.word)}
    </span>
  );
};
