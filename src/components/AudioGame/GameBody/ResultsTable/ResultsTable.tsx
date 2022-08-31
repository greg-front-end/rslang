import React from 'react';

import { finishGame, setInitState } from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { setStartGameState } from '../../utils/setStartGameState';

import styles from './ResultsTable.module.css';

export const ResultsTable = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.audioChallenge.words);
  const newGame = () => {
    dispatch(setInitState(setStartGameState(words)));
    setTimeout(() => dispatch(finishGame(false)), 1000);
  };

  return (
    <button
      type="button"
      className={`btn ${styles.btn_newGame}`}
      onClick={newGame}
    >
      One more time
    </button>
  );
};
