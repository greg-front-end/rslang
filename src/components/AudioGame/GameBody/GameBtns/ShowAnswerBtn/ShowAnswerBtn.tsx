import React, { useEffect } from 'react';

import audio from '../../../../../assets/audio/audioGame/skip.wav';
import { setNextWord } from '../../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';

import styles from './ShowAnswerBtn.module.css';

export const ShowAnswerBtn = () => {
  const dispatch = useAppDispatch();
  const skip = new Audio(audio);

  const stop = () => {
    skip.play();
    setTimeout(() => dispatch(setNextWord(true)), 300);
  };

  const defineBtn = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault();
      stop();
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
      className={`btn ${styles.btn_show_res}`}
      onClick={stop}
    >
      I don’t know
    </button>
  );
};
