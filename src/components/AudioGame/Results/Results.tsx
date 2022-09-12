import React, { useEffect, useState } from 'react';

import { finishGame, setInitState } from '../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { GamesName } from '../../../types/GamesName';
import { IWordsItem } from '../../../types/IWordsItem';
import { ResultsTable } from '../../ResultsTable/ResultsTable';
import { setStartGameState } from '../utils/setStartGameState';

import styles from './Results.module.css';

export const Results = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.audioChallenge.words);
  const result = useAppSelector((state) => state.audioChallenge.rightWords);
  const [wrongAnswers, setWrongAnswers] = useState<IWordsItem[]>([]);
  const row = useAppSelector((state) => state.audioChallenge.inRow);

  const newGame = () => {
    dispatch(setInitState(setStartGameState(words)));
    dispatch(finishGame(false));
  };

  useEffect(() => {
    setWrongAnswers(words.filter((word) => !result.includes(word)));
  }, []);

  return (
    <div className={styles.wrapper}>
      <ResultsTable right={result} wrong={wrongAnswers} inRow={row} game={GamesName.Audio} />
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
