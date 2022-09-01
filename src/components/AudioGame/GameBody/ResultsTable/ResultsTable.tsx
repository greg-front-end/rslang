import React from 'react';

import { finishGame, setInitState } from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { setStartGameState } from '../../utils/setStartGameState';

import { Table } from './Table/Table';

import styles from './ResultsTable.module.css';

export const ResultsTable = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.audioChallenge.words);
  const result = useAppSelector((state) => state.audioChallenge.rightWords);
  const wrongAnswers = words.filter((word) => !result.includes(word));

  const newGame = () => {
    dispatch(setInitState(setStartGameState(words)));
    setTimeout(() => dispatch(finishGame(false)), 1000);
  };
  console.log(result);

  return (
    <div className={styles.wrapper}>
      <h2 className={`title ${styles.section__title}`}>Results</h2>
      <div className={`frame ${styles.table__wrapper}`}>
        <Table
          words={result}
          isRight
        />
        <Table
          words={wrongAnswers}
          isRight={false}
        />
      </div>
      <button
        type="button"
        className={`btn ${styles.btn_newGame}`}
        onClick={newGame}
      >
        One more time
      </button>
    </div>
  );
};
