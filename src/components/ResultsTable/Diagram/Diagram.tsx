import React, { useEffect, useState } from 'react';

import target from '../../../assets/svg/statistics/games/target.svg';

import styles from './Diagram.module.css';

interface ITimerProps {
  value: number,
  r: number,
}

export const Diagram = ({ value, r }: ITimerProps) => {
  const calcSFL = () => r * 2 * Math.PI;
  const calcProgress = () => (calcSFL() / 100) * (100 - value);
  const width = r * 2 + 20;

  const style = {
    strokeDashoffset: calcProgress(),
  };

  return (
    <div className={styles.wrapper}>
      <svg width={width} height={width} className={styles.timer}>
        <circle r={r} cx={width / 2} cy={width / 2} className={styles.track} />
        <circle r={r} cx={width / 2} cy={width / 2} className={styles.progress} style={style} />
      </svg>
      <img src={target} alt="target" className={styles.img} />
    </div>
  );
};
