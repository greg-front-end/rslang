import React from 'react';

import { ReactComponent as ArrowDownIcon } from '../../assets/svg/arrow_down_icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/svg/arrow_up_icon.svg';
import { ReactComponent as LabelIcon } from '../../assets/svg/card_game_label.svg';
import { ReactComponent as CorrectIcon } from '../../assets/svg/correct_indicator_icon.svg';
import { removeSprintWord, setIndicators } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { Translate } from './Translate';
import { Word } from './Word';

import style from './GameCard.module.css';

type SprintCard = {
  word: string,
  translate: string,
  random: string
}

export const GameCard: React.FC<SprintCard> = ({ word, translate, random }) => {
  const dispatch = useAppDispatch();
  const indicators = useAppSelector((state) => state.textBook.indicators);
  const isCurrect = translate === random;

  function determine(str: string) {
    if ((isCurrect && str === 'correct') || (!isCurrect && str === 'wrong')) {
      const index = indicators.findIndex((el) => el === false);
      const arr = [...indicators];
      arr[index] = true;
      dispatch(setIndicators(arr));
      console.log(index);

      console.log('true');
    } else {
      console.log('false');
      dispatch(setIndicators([false, false, false]));
    }

    console.log(str);
    dispatch(removeSprintWord(word));
  }

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
        <Word word={word} />
        <div>
          <ArrowDownIcon />
          <ArrowUpIcon />
        </div>
        <Translate random={random} />
      </div>
      <div className={style.btn_wrapper}>
        <button
          onClick={() => determine('correct')}
          className={`btn ${style.btn_correct}`}
          type="button"
        >
          Correct
        </button>
        <button
          onClick={() => determine('wrong')}
          className={` btn ${style.btn_wrong}`}
          type="button"
        >
          Wrong
        </button>
      </div>
    </div>
  );
};
