import React, { useEffect } from 'react';

import audio from '../../../../../assets/audio/audioGame/skip.wav';
import { changeCounter, setInRow, setNextWord } from '../../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';

import styles from './ShowAnswerBtn.module.css';

export const ShowAnswerBtn = () => {
  const dispatch = useAppDispatch();
  const skip = new Audio(audio);
  const rowCounter = useAppSelector((state) => state.audioChallenge.rowCounter);

  const stop = () => {
    skip.play();
    dispatch(setInRow(rowCounter));
    dispatch(changeCounter(0));
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
