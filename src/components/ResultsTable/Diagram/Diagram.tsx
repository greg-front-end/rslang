import React, { useEffect, useState } from 'react';

import target from '../../../assets/svg/statistics/games/target.svg';

import styles from './Diagram.module.css';

interface ITimerProps {
  value: number,
}

const COUNTER_RADIUS = 40;

const calcSFL = () => COUNTER_RADIUS * 2 * Math.PI;

export const Diagram = ({ value }: ITimerProps) => {
  const calcProgress = () => (calcSFL() / 100) * (100 - value);

  const style = {
    strokeDashoffset: calcProgress(),
  };

  return (
    <div className={styles.wrapper}>
      <svg width="100" height="100" className={styles.timer}>
        <circle r={COUNTER_RADIUS} cx="50" cy="50" className={styles.track} />
        <circle r={COUNTER_RADIUS} cx="50" cy="50" className={styles.progress} style={style} />
      </svg>
      <img src={target} alt="target" className={styles.img} />
    </div>
  );
};
