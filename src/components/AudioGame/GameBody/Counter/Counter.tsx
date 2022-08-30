import React, { useEffect, useState } from 'react';

import {
  changeCurrentWord,
  reset, resetTimer, startTimer,
} from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import CounterFrame from '../../img/counter-frame.svg';

import styles from './Counter.module.css';

export const Counter = () => {
  let timeout: NodeJS.Timeout;
  const timer = useAppSelector((state) => state.audioChallenge.end);
  const dispatch = useAppDispatch();
  const [style, setStyle] = useState({
    strokeDashoffset: 0,
  });

  useEffect(() => {
    timeout = setTimeout(() => dispatch(startTimer()), 1000);
    setStyle({
      // eslint-disable-next-line no-mixed-operators
      strokeDashoffset: 40 * 2 * Math.PI / 15 * (15 - timer),
    });
    if (timer < 0) {
      dispatch(reset());
      clearTimeout(timeout);
      dispatch(resetTimer());
      dispatch(changeCurrentWord());
    }
  }, [timer]);

  return (
    <div className={styles.wrapper}>
      {/* <img
        src={CounterFrame}
        alt="frame"
        className={styles.frame}
      /> */}
      <svg width="100" height="100">
        <circle r="40" cx="50" cy="50" className={styles.track} />
        <circle r="40" cx="50" cy="50" className={styles.progress} style={style} />
      </svg>
      <span className={styles.counter}>{timer}</span>
    </div>
  );
};
