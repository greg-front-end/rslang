import React, { FC, useEffect, useState } from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

import style from './style.module.css';

const KEY = dateKeyGenerator();

export const WordsLearned: FC = () => {
  const statistic = useAppSelector((state) => state.statistic.statistic);
  const [words, setWords] = useState(0);
  const [newWords, setNewWords] = useState(0);

  useEffect(() => {
    if (statistic.optional[KEY]) {
      setWords(statistic.optional[KEY].learnedWords);
      setNewWords(statistic.optional[KEY].newWords);
    }
  }, [statistic]);

  return (
    <div className={style.wrapper}>
      <div className={style.words_learned}>
        <span className={style.words_learned_value}>{words}</span>
        <span className={style.words_learned_text}>Words learned</span>
      </div>
      <div className={style.words_learned}>
        <span className={style.words_learned_value}>{newWords}</span>
        <span className={style.words_learned_text}>New words</span>
      </div>
    </div>
  );
};
