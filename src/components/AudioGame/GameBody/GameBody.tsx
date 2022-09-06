import React from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';

import { GameBtns } from './GameBtns/GameBtns';
import { NextBtn } from './GameBtns/NextBtn/NextBtn';
import { ShowAnswerBtn } from './GameBtns/ShowAnswerBtn/ShowAnswerBtn';
import { WordItems } from './WordItems/WordItems';

import styles from './GameBody.module.css';

export const GameBody = () => {
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  return (
    <div className={styles.wrapper}>
      <WordItems />
      <GameBtns />
      {nextWord
        ? <NextBtn />
        : <ShowAnswerBtn />}
    </div>
  );
};
