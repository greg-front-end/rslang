import React, { useEffect } from 'react';

import {
  change, changeCurrentWord, resetTimer, startTimer,
} from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { Timer } from '../../../Timer/Timer';
import { changeWord } from '../../utils/changeWord';

import styles from './Counter.module.css';

const TIMER_TIME = 15;

export const Counter = () => {
  let counter: NodeJS.Timeout;
  const timer = useAppSelector((state) => state.audioChallenge.end);
  const dispatch = useAppDispatch();
  const isTimer = useAppSelector((state) => state.audioChallenge.timerStop);
  const words = useAppSelector((state) => state.audioChallenge.words);
  const index = useAppSelector((state) => state.audioChallenge.currentIndex);

  useEffect(() => {
    if (!isTimer) {
      counter = setTimeout(() => dispatch(startTimer()), 1000);
    }
    if (timer < 1) {
      clearTimeout(counter);
      dispatch(resetTimer());
      dispatch(change());
      dispatch(changeCurrentWord(changeWord(words, index)));
    }
  }, [timer]);

  return (
    <div className={styles.wrapper}>
      <Timer timer={timer} timerTime={TIMER_TIME} />
    </div>
  );
};
