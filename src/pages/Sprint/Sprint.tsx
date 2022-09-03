import React, { useEffect } from 'react';

import { ResultsTable } from '../../components/ResultsTable/ResultsTable';
import { GamesStatisticsTable } from '../../components/statistics/GamesStatisticsTable/GamesStatisticsTable';
import { Timer } from '../../components/Timer/Timer';
import { decrementTimer, setSprintWords } from '../../features/sprintSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { isUserLogIn } from '../../utils/isUserLogIn';

import { GameCard } from './GameCard';
import { inRowCounter } from './inRowCounter';
import { randomWords } from './RandomWords';

import style from './Sprint.module.css';

export const Sprint = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const sprintWords = useAppSelector((state) => state.sprint.sprintWords);
  const currectWrongWords = useAppSelector((state) => state.sprint.currectWrongWords);
  const currectWords = useAppSelector((state) => state.sprint.currectWords);
  const wrongWords = useAppSelector((state) => state.sprint.wrongWords);
  const timer = useAppSelector((state) => state.sprint.timer);
  console.log('sprintWords: ', sprintWords);
  console.log('cards: ', cards);

  useEffect(() => {
    dispatch(setSprintWords(randomWords(cards)));
  }, [cards]);

  useEffect(() => {
    console.log('inRow', currectWrongWords);
    if (sprintWords.length === 0) {
      const inRow = inRowCounter(currectWrongWords);
      console.log('inRow', inRow);
    }
  }, [sprintWords]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(decrementTimer(1));
  //   }, 1000);
  // }, [timer]);

  return (
    <div className="container">
      <h1 className="title">Sprint</h1>
      <Timer timer={timer} timerTime={50} />

      {sprintWords[0] && (
        <GameCard
          id={sprintWords[0].id}
          word={sprintWords[0].word}
          translate={sprintWords[0].translate}
          random={sprintWords[0].random}
        />
      )}
      {!sprintWords.length && (
        <div className={style.wrapper_timer}>
          <ResultsTable right={currectWords} wrong={wrongWords} />
        </div>
      )}
    </div>

  );
};
