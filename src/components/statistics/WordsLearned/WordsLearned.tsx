import React, { FC } from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { getLearnedWords } from '../utils/getLearnedWords';

import style from './style.module.css';

export const WordsLearned: FC = () => {
  const statistic = useAppSelector((state) => state.statistic.statistic);
  const words = getLearnedWords(statistic);
  return (
    <div className={style.words_learned}>
      <span className={style.words_learned_value}>{words}</span>
      <span className={style.words_learned_text}>Words learned</span>
    </div>
  );
};
