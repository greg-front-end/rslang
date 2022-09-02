import React from 'react';

import { setNextWord, stopTimer } from '../../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';

import styles from './ShowAnswerBtn.module.css';

export const ShowAnswerBtn = () => {
  const dispatch = useAppDispatch();

  const stop = () => {
    setTimeout(() => dispatch(setNextWord(true)), 300);
  };
  return (
    <button
      type="button"
      className={`btn ${styles.btn_show_res}`}
      onClick={stop}
    >
      I don’t know
    </button>
  );
};
