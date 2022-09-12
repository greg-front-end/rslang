import React, { useEffect, useState } from 'react';

import { useAppSelector } from '../../../../../hooks/useAppSelector';

import styles from './Word.module.css';

const firstLetToUpCase = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const Word = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  const pushNextBtn = useAppSelector((state) => state.audioChallenge.isPushNextBtn);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (nextWord) {
      setShow(true);
    }
  }, [nextWord]);

  useEffect(() => {
    setShow(false);
  }, [pushNextBtn]);

  return (
    <span
      className={show ? styles.word : styles.word_hide}
    >
      {firstLetToUpCase(item.word)}
    </span>
  );
};
