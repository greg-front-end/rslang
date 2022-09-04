import React, { FC, useEffect } from 'react';

import { getEasyWords } from '../../../api/getEasyWords';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { getLearnedWords } from '../utils/getLearnedWords';

import style from './style.module.css';

export const WordsLearned: FC = () => {
  // const words = getLearnedWords(statistic);
  const dispatch = useAppDispatch();
  const difState = useAppSelector((state) => state.wordOption.difficultState);

  const words = useAppSelector((state) => state.textBook.easyWordsCount);
  useEffect(() => {
    dispatch(getEasyWords());
  }, []);

  return (
    <div className={style.words_learned}>
      <span className={style.words_learned_value}>{words}</span>
      <span className={style.words_learned_text}>Words learned</span>
    </div>
  );
};
