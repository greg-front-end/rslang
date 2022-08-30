import React, { FC } from 'react';

import style from './style.module.css';

type GamesStatisticsTableProps = {
  value: number
}

export const GamesStatisticsTable: FC<GamesStatisticsTableProps> = ({ value }) => (
  <ul className={style.state_list}>
    <li className={style.state_list_item}>
      <span className={style.staet_list_int}>{value}</span>
      <span className={style.staet_list_text}>in row</span>
    </li>
    <li className={style.state_list_item}>
      <span className={style.staet_list_int}>{`${value}%`}</span>
      <span className={style.staet_list_text}>in accuracy</span>
    </li>
    <li className={style.state_list_item}>
      <span className={style.staet_list_int}>{value}</span>
      <span className={style.staet_list_text}>words</span>
    </li>
  </ul>
);
