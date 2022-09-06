import React, { useEffect, useState } from 'react';

import titleImg from '../../assets/svg/statistics/games/resimg.svg';
import bgImg from '../../assets/svg/statistics/games/win.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { GamesName } from '../../types/GamesName';
import { IWordsItem } from '../../types/IWordsItem';
import { isUserLogIn } from '../../utils/isUserLogIn';

import { Diagram } from './Diagram/Diagram';
import { Counts } from './Counts';

import style from './ResultsTable.module.css';

interface IResultsTableProps {
  right: IWordsItem[];
  wrong: IWordsItem[];
  inRow: number;
  game: GamesName;
}

export const ResultsTable = ({
  right, wrong, inRow, game,
}: IResultsTableProps) => {
  const inAccuracy = (right.length + wrong.length) === 0
    ? 0
    : Math.round((right.length * 100) / (right.length + wrong.length));
  return (
    <div className={style.wrapper}>
      {isUserLogIn()
        && (
          <Counts
            right={right}
            wrong={wrong}
            game={game}
            inRow={inRow}
            inAccuracy={inAccuracy}
          />
        )}
      <div className={`frame ${style.frame}`}>
        <div className={style.bg_img}>
          <img src={bgImg} alt="win" />
        </div>
        <div className={style.title_wrapper}>
          <img src={titleImg} alt="A+" />
          <h3 className={style.title}>Result</h3>
        </div>
        <div className={style.bottom}>
          <div className={style.diagram_wrapper}>
            <span className={style.number}>
              {inAccuracy}
              %
            </span>
            <Diagram value={inAccuracy} r={40} />
            <span className={style.accuracy}>accuracy</span>
          </div>
          <div className={style.results_wrapper}>
            <div className={style.points_wrapper}>
              <span>in row</span>
              <span>{inRow}</span>
            </div>
            <div className={style.points_wrapper}>
              <span>right</span>
              <span>{right.length}</span>
            </div>
            <div className={style.points_wrapper}>
              <span>wrong</span>
              <span>{wrong.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
