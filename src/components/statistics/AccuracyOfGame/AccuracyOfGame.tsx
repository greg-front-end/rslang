import React, { FC } from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';
import { Diagram } from '../../ResultsTable/Diagram/Diagram';

import style from './style.module.css';

const KEY = dateKeyGenerator();

export const AccuracyOfGame: FC = () => {
  const statistic = useAppSelector((state) => state.statistic.statistic);
  const { generalAccuracy } = statistic.optional[KEY] || 0;
  return (
    <div className={style.accuracy}>
      <div className={style.goal}>
        <h3 className={style.title}>Accuracy</h3>
        <div className={style.svg_wrapper}>
          <Diagram value={generalAccuracy} r={40} />
        </div>
      </div>
      <div className={style.description}>
        <h4 className={style.procent_value}>{generalAccuracy === -1 ? 0 : generalAccuracy}</h4>
        <span className={style.procent}>%</span>
      </div>
    </div>
  );
};
