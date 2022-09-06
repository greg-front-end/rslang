import React, { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { ReactComponent as ArrowDownIcon } from '../../assets/svg/arrow_down_icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/svg/arrow_up_icon.svg';
import { ReactComponent as LabelIcon } from '../../assets/svg/card_game_label.svg';
import { ReactComponent as CorrectIcon } from '../../assets/svg/correct_indicator_icon.svg';
import {
  removeSprintWord, setCurrectWrongWords, setCurrentWords, setIndicators, setInRow, setWrongWords,
} from '../../features/sprintSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IWordsItem } from '../../types/IWordsItem';
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
  const buffer = useAppSelector((state) => state.sprint.buffer);
  const indicators = useAppSelector((state) => state.sprint.indicators);
  const isCurrect = translate === random;

  function determine(str: string) {
    // eslint-disable-next-line no-underscore-dangle
    const card = cards.find((el) => (isUserLogIn() ? el._id === id : el.id === id));
    // eslint-disable-next-line no-underscore-dangle
    const cardBuffer = buffer.find((el) => (isUserLogIn() ? el._id === id : el.id === id));

    if ((isCurrect && str === 'correct') || (!isCurrect && str === 'wrong')) {
      const index = indicators.findIndex((el) => el === false);
      if (index === -1) {
        dispatch(setIndicators([false, false, false]));
      } else {
        const arr = [...indicators];
        arr[index] = true;
        dispatch(setIndicators(arr));
      }
      dispatch(setCurrectWrongWords('1'));
      if (card) dispatch(setCurrentWords(card));
      if (cardBuffer) dispatch(setCurrentWords(cardBuffer));
    } else {
      dispatch(setIndicators([false, false, false]));
      dispatch(setCurrectWrongWords('0'));
      if (card) dispatch(setWrongWords(card));
      if (cardBuffer) dispatch(setWrongWords(cardBuffer));
    }

    dispatch(removeSprintWord(word));
  }

  const defineBtn = (e: KeyboardEvent) => {
    if (e.key === '1') {
      determine('correct');
    }
    if (e.key === '2') {
      determine('wrong');
    }
  };
  document.addEventListener('keydown', defineBtn);
  useEffect(() => () => {
    document.removeEventListener('keydown', defineBtn);
  });

  return (
    <div className={style.wrapper}>
      <div className={style.indicatiors_wrapper}>
        {indicators.map((el) => (el ? <CorrectIcon key={nanoid()} fill="#C6AD4A" /> : <CorrectIcon key={nanoid()} />))}
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
