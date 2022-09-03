import React from 'react';

import style from './GameCard.module.css';

type Word = {
  word: string
}

export const Word: React.FC<Word> = ({ word }) => (
  <div className={style.word}>{word}</div>
);
