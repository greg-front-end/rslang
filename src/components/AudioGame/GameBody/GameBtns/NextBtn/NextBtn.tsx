import React, { useEffect } from 'react';

import audio from '../../../../../assets/audio/audioGame/finish.wav';
import {
  changeCurrentWord, finishGame, pushNextButton, setInRow, setNextWord,
} from '../../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { changeWord } from '../../../utils/changeWord';

import styles from './NextBtn.module.css';

export const NextBtn = () => {
  const finishAudio = new Audio(audio);
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.audioChallenge.words);
  const index = useAppSelector((state) => state.audioChallenge.currentIndex);
  const rowCounter = useAppSelector((state) => state.audioChallenge.rowCounter);

  const next = () => {
    dispatch(pushNextButton());
    setTimeout(() => {
      if (words.length === index + 1) {
        dispatch(finishGame(true));
        dispatch(setInRow(rowCounter));
        finishAudio.play();
      } else {
        dispatch(changeCurrentWord(changeWord(words, index)));
      }
      dispatch(setNextWord(false));
    }, 500);
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
