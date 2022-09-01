import React, { useEffect, useState } from 'react';

import styles from './Timer.module.css';

interface ITimerProps {
  timer: number,
  timerTime: number,
}

const COUNTER_RADIUS = 40;

const calcSFL = () => COUNTER_RADIUS * 2 * Math.PI;

export const Timer = ({ timer, timerTime }: ITimerProps) => {
  const calcProgress = () => (calcSFL() / timerTime) * (timerTime - timer);

  const style = {
    strokeDashoffset: calcProgress(),
  };

  return (
    <>
      <svg width="100" height="100" className={styles.timer}>
        <circle r={COUNTER_RADIUS} cx="50" cy="50" className={styles.track} />
        <circle r={COUNTER_RADIUS} cx="50" cy="50" className={styles.progress} style={style} />
      </svg>
      <span className={styles.counter}>{timer}</span>
    </>
  );
};
