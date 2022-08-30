import React, { FC } from 'react';

import style from './style.module.css';

export const WordsLearned: FC = () => (
  <div className={style.words_learned}>
    <span className={style.words_learned_value}>0</span>
    <span className={style.words_learned_text}>Words learned</span>
  </div>
);
