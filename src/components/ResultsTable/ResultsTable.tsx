import React, { useEffect, useState } from 'react';

import { getEasyWords } from '../../api/getEasyWords';
import { getUserStatistic } from '../../api/getUserStatistic';
import { postWordOption } from '../../api/postWordOption';
import { putUserStatistic } from '../../api/putUserStatistic';
import titleImg from '../../assets/svg/statistics/games/resimg.svg';
import bgImg from '../../assets/svg/statistics/games/win.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { GamesName } from '../../types/GamesName';
import { IWordsItem } from '../../types/IWordsItem';
import { LoadStatus } from '../../types/LoadStatus';
import { GameStatistics } from '../../types/Statistic';

import { Diagram } from './Diagram/Diagram';
import { getGameStatistic } from './utils/getGameStatistic';
import { wordStatisticRight } from './utils/wordStatisticRigth';
import { wordStatisticWrong } from './utils/wordStatisticWrong';

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
  const dispatch = useAppDispatch();
  const statistic = useAppSelector((state) => state.statistic.statistic);
  // const loadStatus = useAppSelector((state) => state.textBook.loadStatus);
  const learned = useAppSelector((state) => state.textBook.easyWordsCount);
  const [loadTrigger, setLoadTrigger] = useState(false);
  const finish = useAppSelector((state) => state.audioChallenge.finish);

  const rightWordStatistics = right.map((word) => wordStatisticRight(word));
  const wrongWordStatistics = wrong.map((word) => wordStatisticWrong(word));
  const words = rightWordStatistics.filter(({ isNew }) => isNew).length
    + wrongWordStatistics.filter(({ isNew }) => isNew).length;

  const inAccuracy = (right.length + wrong.length) === 0
    ? 0
    : Math.round((right.length * 100) / (right.length + wrong.length));

  const newGameStatistic: GameStatistics = { inRow, words, inAccuracy };

  const statisticObject = getGameStatistic({
    statistic, newGameStatistic, game, learned,
  });

  const sendGameStatistic = async () => {
    await dispatch(putUserStatistic(statisticObject));
  };

  const sendWordsStatistic = () => {
    rightWordStatistics.forEach(({ obj }) => dispatch(postWordOption(obj)));
    wrongWordStatistics.forEach(({ obj }) => dispatch(postWordOption(obj)));
  };

  const loadPrevStatistic = async () => {
    await dispatch(getUserStatistic());
    await dispatch(getEasyWords());
    setLoadTrigger(true);
  };

  useEffect(() => {
    if (finish) {
      loadPrevStatistic();
    }
  }, [finish]);

  useEffect(() => {
    if (loadTrigger) {
      sendWordsStatistic();
      sendGameStatistic();
    }
  }, [loadTrigger]);

  return (
    <div className={style.wrapper}>
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
