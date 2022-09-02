import React from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';

import { Counter } from './Counter/Counter';
import { GameBtns } from './GameBtns/GameBtns';
import { NextBtn } from './GameBtns/NextBtn/NextBtn';
import { ShowAnswerBtn } from './GameBtns/ShowAnswerBtn/ShowAnswerBtn';
import { ResultsTable } from './ResultsTable/ResultsTable';
import { WordItems } from './WordItems/WordItems';

import styles from './GameBody.module.css';

export const GameBody = () => {
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  const finish = useAppSelector((state) => state.audioChallenge.finish);

  return (
    <div className={styles.wrapper}>
      {finish
        ? <ResultsTable />
        : (
          <>
            {/* <Counter /> */}
            <WordItems />
            <GameBtns />
            {nextWord
              ? <NextBtn />
              : <ShowAnswerBtn />}
          </>
        )}
    </div>
  );
};
