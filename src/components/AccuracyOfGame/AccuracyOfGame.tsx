import React, { FC } from 'react';

import { ReactComponent as AccurIcon } from '../../assets/svg/statistics/accuracy.svg';
import { ReactComponent as GoalIcon } from '../../assets/svg/statistics/goal.svg';

import style from './style.module.css';

export const AccuracyOfGame: FC = () => (
  <div className={style.accuracy}>
    <div className={style.goal}>
      <h3 className={style.title}>Accuracy</h3>
      <div className={style.svg_wrapper}>
        <AccurIcon />
        <GoalIcon />
      </div>
    </div>
    <div className={style.description}>
      <h4 className={style.value}>0</h4>
      <span className={style.procent}>%</span>
    </div>
  </div>
);
