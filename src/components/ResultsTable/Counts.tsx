import React, { useEffect, useState } from 'react';

import { getEasyWords } from '../../api/getEasyWords';
import { getUserStatistic } from '../../api/getUserStatistic';
import { postWordOption } from '../../api/postWordOption';
import { putUserStatistic } from '../../api/putUserStatistic';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { GamesName } from '../../types/GamesName';
import { IWordsItem } from '../../types/IWordsItem';
import { GameStatistics } from '../../types/Statistic';

import { getGameStatistic } from './utils/getGameStatistic';
import { wordStatisticRight } from './utils/wordStatisticRigth';
import { wordStatisticWrong } from './utils/wordStatisticWrong';

interface IResultsTableProps {
  right: IWordsItem[];
  wrong: IWordsItem[];
  inRow: number;
  game: GamesName;
  inAccuracy: number;
}

export const Counts = ({
  right, wrong, inRow, game, inAccuracy,
}: IResultsTableProps) => {
  const dispatch = useAppDispatch();
  const statistic = useAppSelector((state) => state.statistic.statistic);
  const learned = useAppSelector((state) => state.textBook.easyWordsCount);
  const [loadTrigger, setLoadTrigger] = useState(false);

  const rightWordStatistics = right.map((word) => wordStatisticRight(word));
  const wrongWordStatistics = wrong.map((word) => wordStatisticWrong(word));
  const words = rightWordStatistics.filter(({ isNew }) => isNew).length
    + wrongWordStatistics.filter(({ isNew }) => isNew).length;

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
    loadPrevStatistic();
  }, []);

  useEffect(() => {
    if (loadTrigger) {
      sendWordsStatistic();
      sendGameStatistic();
    }
  }, [loadTrigger]);

  return (
    <span />
  );
};
