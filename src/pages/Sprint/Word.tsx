import React from 'react';

import style from './GameCard.module.css';

type Word = {
  word: string
}

export const Word: React.FC<Word> = ({ word }) => (
  <span className={style.word}>{word}</span>
);
