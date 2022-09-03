import React from 'react';

import {
  changeCurrentWord, finishGame, setNextWord, stopTimer,
} from '../../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { changeWord } from '../../../utils/changeWord';

import styles from './NextBtn.module.css';

export const NextBtn = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.audioChallenge.words);
  const index = useAppSelector((state) => state.audioChallenge.currentIndex);

  const next = () => {
    setTimeout(() => {
      words.length === index + 1
        ? dispatch(finishGame(true))
        : dispatch(changeCurrentWord(changeWord(words, index)));
      dispatch(setNextWord(false));
    }, 300);
  };
  return (
    <button
      type="button"
      className={`btn ${styles.btn_next}`}
      onClick={next}
    >
      →
    </button>
  );
};
