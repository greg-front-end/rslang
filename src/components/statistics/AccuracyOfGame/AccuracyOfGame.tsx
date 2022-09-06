import React, { FC } from 'react';

import { ReactComponent as AccurIcon } from '../../../assets/svg/statistics/accuracy.svg';
import { ReactComponent as GoalIcon } from '../../../assets/svg/statistics/goal.svg';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Diagram } from '../../ResultsTable/Diagram/Diagram';
import { getGeneralAccuracy } from '../utils/getGeneralAccuracy';

import style from './style.module.css';

export const AccuracyOfGame: FC = () => {
  const statistic = useAppSelector((state) => state.statistic.statistic);
  const generalAccuracy = getGeneralAccuracy(statistic);
  return (
    <div className={style.accuracy}>
      <div className={style.goal}>
        <h3 className={style.title}>Accuracy</h3>
        <div className={style.svg_wrapper}>
          {/* <AccurIcon className={style.circle_icon} />
          <GoalIcon className={style.goal_icon} /> */}
          <Diagram value={generalAccuracy} r={40} />
        </div>
      </div>
      <div className={style.description}>
        <h4 className={style.procent_value}>{generalAccuracy}</h4>
        <span className={style.procent}>%</span>
      </div>
    </div>
  );
};
