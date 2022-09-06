import React, { FC } from 'react';

import { ReactComponent as ArrowRightIcon } from '../../../assets/svg/statistics/arrow-right.svg';
import { QuickStartGame } from '../../QuickStartGame/QuickStartGame';

import { LearnedWords } from './LearnedWords/LearnedWords';
import { Progress } from './Progress/Progress';

import style from './style.module.css';

export const AllTime: FC = () => (
  <div className={style.all_time}>
    <div className={style.title_date_wrapper}>
      <h3 className={style.title}>All time</h3>
    </div>
    <div className={style.d3_wrapper}>
      <LearnedWords />
      <Progress />
    </div>
    <div className={style.quick_start_game}>
      <QuickStartGame />
    </div>
  </div>
);
