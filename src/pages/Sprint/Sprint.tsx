import React, { useEffect } from 'react';

import { getUserStatistic } from '../../api/getUserStatistic';
import { putUserStatistic } from '../../api/putUserStatistic';
import { ResultsTable } from '../../components/ResultsTable/ResultsTable';
import { GamesStatisticsTable } from '../../components/statistics/GamesStatisticsTable/GamesStatisticsTable';
import { Timer } from '../../components/Timer/Timer';
import {
  clearCurrentWords, clearWrongWords, decrementTimer,
  decrementTimerBeforeGame,
  setCurrentWords, setSprintWords, setTimer, setTimerBeforeGame,
} from '../../features/sprintSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { StatisticsState } from '../../types/Statistic';
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
  const timerBeforeGame = useAppSelector((state) => state.sprint.timerBeforeGame);

  const hh: StatisticsState = {
    learnedWords: 15,
    optional: {
      ggg: {
        audioCall: {
          inRow: 10,
          words: 10,
          inAccuracy: 10,
        },
        sprint: {
          inRow: 10,
          words: 10,
          inAccuracy: 0,
        },
      },
    },
  };

  useEffect(() => {
    dispatch(setTimerBeforeGame(4));
    dispatch(setTimer(10));
    dispatch(clearCurrentWords());
    dispatch(clearWrongWords());
    dispatch(setSprintWords(randomWords(cards)));
  }, [cards]);

  // useEffect(() => {
  //   if (sprintWords.length === 0) {
  //     const inRow = inRowCounter(currectWrongWords);
  //   }
  // }, [sprintWords]);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0 && timerBeforeGame < 1 && sprintWords.length) {
        dispatch(decrementTimer(1));
      }
    }, 1000);
  }, [timer, timerBeforeGame]);

  useEffect(() => {
    setTimeout(() => {
      if (timerBeforeGame > 0) {
        dispatch(decrementTimerBeforeGame(1));
      }
    }, 1000);
  }, [timerBeforeGame]);

  return (
    <div className="container">
      <h1 className="title">Sprint</h1>
      {timerBeforeGame
        ? <div className={style.wrapper_timer}><Timer timer={timerBeforeGame} timerTime={4} /></div>
        : <span />}
      {!timerBeforeGame && timer && sprintWords.length
        ? (<div className={style.wrapper_timer}><Timer timer={timer} timerTime={10} /></div>)
        : <span />}
      {!timerBeforeGame && timer && sprintWords[0] ? (
        <GameCard
          id={sprintWords[0].id}
          word={sprintWords[0].word}
          translate={sprintWords[0].translate}
          random={sprintWords[0].random}
        />
      ) : <span />}
      {/* {!timer || !sprintWords.length
        ? (<ResultsTable right={currectWords} wrong={wrongWords} />)
        : <span />} */}
    </div>
  );
};
