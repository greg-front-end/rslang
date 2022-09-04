import React, { useEffect } from 'react';

import {
  changeCurrentWord, finishGame, setInRow, setNextWord,
} from '../../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { changeWord } from '../../../utils/changeWord';

import styles from './NextBtn.module.css';

export const NextBtn = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.audioChallenge.words);
  const index = useAppSelector((state) => state.audioChallenge.currentIndex);
  const rowCounter = useAppSelector((state) => state.audioChallenge.rowCounter);

  const next = () => {
    setTimeout(() => {
      if (words.length === index + 1) {
        dispatch(finishGame(true));
        dispatch(setInRow(rowCounter));
      } else {
        dispatch(changeCurrentWord(changeWord(words, index)));
      }
      dispatch(setNextWord(false));
    }, 300);
  };

  const defineBtn = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault();
      next();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', defineBtn);

    return () => {
      document.removeEventListener('keydown', defineBtn);
    };
  }, []);

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
