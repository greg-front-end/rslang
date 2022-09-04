import React, { FC } from 'react';

import style from './style.module.css';

type GamesStatisticsTableProps = {
  inRow: number;
  inAccuracy: number;
  words: number;
}

export const GamesStatisticsTable: FC<GamesStatisticsTableProps> = ({
  inRow, inAccuracy, words,
}) => (
  <ul className={style.state_list}>
    <li className={style.state_list_item}>
      <span className={style.state_list_int}>{inRow}</span>
      <span className={style.state_list_text}>in row</span>
    </li>
    <li className={style.state_list_item}>
      <span className={style.state_list_int}>{`${inAccuracy}%`}</span>
      <span className={style.state_list_text}>in accuracy</span>
    </li>
    <li className={style.state_list_item}>
      <span className={style.state_list_int}>{words}</span>
      <span className={style.state_list_text}>words</span>
    </li>
  </ul>
);
