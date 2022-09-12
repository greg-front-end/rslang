import React from 'react';

import style from './GameCard.module.css';

type Translate = {
  random: string
}

export const Translate:React.FC<Translate> = ({ random }) => (
  <span className={`${style.word} ${style.translate}`}>{random}</span>
);
