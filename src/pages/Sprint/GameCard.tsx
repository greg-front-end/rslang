import React from 'react';

import { ReactComponent as ArrowDownIcon } from '../../assets/svg/arrow_down_icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/svg/arrow_up_icon.svg';
import { ReactComponent as LabelIcon } from '../../assets/svg/card_game_label.svg';
import { ReactComponent as CorrectIcon } from '../../assets/svg/correct_indicator_icon.svg';

import { Translate } from './Translate';
import { Word } from './Word';

import style from './GameCard.module.css';

export const GameCard = () => {
  const indicators: boolean[] = [false, false, true];

  return (
    <div className={style.wrapper}>
      <div className={style.indicatiors_wrapper}>
        {indicators.map((el) => (el ? <CorrectIcon fill="#C6AD4A" /> : <CorrectIcon />))}
      </div>
      <div className={style.description}>
        <span>Correct answers in row</span>
        <LabelIcon />
      </div>
      <div className={style.words_arrows_wrapper}>
        <Word />
        <div>
          <ArrowDownIcon />
          <ArrowUpIcon />
        </div>
        <Translate />
      </div>
      <div className={style.btn_wrapper}>
        <button
          onClick={() => console.log('correct')}
          className={`btn ${style.btn_correct}`}
          type="button"
        >
          Correct
        </button>
        <button
          onClick={() => console.log('wrong')}
          className={` btn ${style.btn_wrong}`}
          type="button"
        >
          Wrong
        </button>
      </div>
    </div>
  );
};
