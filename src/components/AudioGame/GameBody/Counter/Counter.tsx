import React, { useEffect } from 'react';

import {
  changeCurrentWord, finishGame, startTimer, stopTimer,
} from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { Timer } from '../../../Timer/Timer';
import { changeWord } from '../../utils/changeWord';

import styles from './Counter.module.css';

const TIMER_TIME = 10;

export const Counter = () => {
  const timer = useAppSelector((state) => state.audioChallenge.end);
  const dispatch = useAppDispatch();
  const isTimer = useAppSelector((state) => state.audioChallenge.timerStop);
  const words = useAppSelector((state) => state.audioChallenge.words);
  const index = useAppSelector((state) => state.audioChallenge.currentIndex);
  const finish = useAppSelector((state) => state.audioChallenge.finish);

  useEffect(() => {
    if (!isTimer && !finish) {
      setTimeout(() => dispatch(startTimer()), 1000);
    }
    if (isTimer || timer === 0) {
      dispatch(stopTimer(true));
      setTimeout(() => {
        words.length === index + 1
          ? dispatch(finishGame(true))
          : dispatch(changeCurrentWord(changeWord(words, index)));
        document.body.style.pointerEvents = 'auto';
      }, 2000);
    }
  }, [timer]);

  return (
    <div className={styles.wrapper}>
      <Timer timer={timer} timerTime={TIMER_TIME} />
    </div>
  );
};
