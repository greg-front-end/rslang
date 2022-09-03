import React from 'react';

import { ReactComponent as ArrowDownIcon } from '../../assets/svg/arrow_down_icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/svg/arrow_up_icon.svg';
import { ReactComponent as LabelIcon } from '../../assets/svg/card_game_label.svg';
import { ReactComponent as CorrectIcon } from '../../assets/svg/correct_indicator_icon.svg';
import {
  removeSprintWord, setCurrentWords, setIndicators, setInRow, setWrongWords,
} from '../../features/sprintSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { SprintCard } from '../../types/Sprint';
import { isUserLogIn } from '../../utils/isUserLogIn';

import { Translate } from './Translate';
import { Word } from './Word';

import style from './GameCard.module.css';

export const GameCard: React.FC<SprintCard> = ({
  word, translate, random, id,
}) => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const indicators = useAppSelector((state) => state.sprint.indicators);
  const isCurrect = translate === random;

  function determine(str: string) {
    // eslint-disable-next-line no-underscore-dangle
    const card = cards.find((el) => (isUserLogIn() ? el._id === id : el.id === id));

    console.log('cardsss', cards);
    console.log(card);
    console.log(id);

    if ((isCurrect && str === 'correct') || (!isCurrect && str === 'wrong')) {
      const index = indicators.findIndex((el) => el === false);
      if (index === -1) {
        dispatch(setIndicators([false, false, false]));
      } else {
        const arr = [...indicators];
        arr[index] = true;
        dispatch(setIndicators(arr));
      }
      dispatch(setInRow('1'));
      if (card) dispatch(setCurrentWords(card));
      console.log('true');
    } else {
      console.log('false');
      dispatch(setIndicators([false, false, false]));
      dispatch(setInRow('0'));
      if (card) dispatch(setWrongWords(card));
    }

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
