import React from 'react';

import style from './GameCard.module.css';

type Translate = {
  translate: string
}

export const Translate:React.FC<Translate> = ({ translate }) => (
  <div className={`${style.word} ${style.translate}`}>{translate}</div>
);
