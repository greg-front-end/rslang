import React from 'react';

import { stopTimer } from '../../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';

import styles from './ShowAnswerBtn.module.css';

export const ShowAnswerBtn = () => {
  const dispatch = useAppDispatch();

  const stop = () => {
    document.body.style.pointerEvents = 'none';
    dispatch(stopTimer(true));
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
