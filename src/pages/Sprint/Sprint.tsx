import React, { useEffect } from 'react';

import { getUserStatistic } from '../../api/getUserStatistic';
import { putUserStatistic } from '../../api/putUserStatistic';
import { ResultsTable } from '../../components/ResultsTable/ResultsTable';
import { GamesStatisticsTable } from '../../components/statistics/GamesStatisticsTable/GamesStatisticsTable';
import { Timer } from '../../components/Timer/Timer';
import {
  clearCurrentWords, clearWrongWords, decrementTimer, setCurrentWords, setSprintWords, setTimer,
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
    dispatch(setTimer(10));
    dispatch(clearCurrentWords());
    dispatch(clearWrongWords());
    dispatch(setSprintWords(randomWords(cards)));
  }, [cards]);

  useEffect(() => {
    if (sprintWords.length === 0) {
      const inRow = inRowCounter(currectWrongWords);
    }
  }, [sprintWords]);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        dispatch(decrementTimer(1));
      } else {
        dispatch(putUserStatistic(hh));
        dispatch(getUserStatistic());
      }
    }, 1000);
  }, [timer]);

  return (
    <div className="container">
      <h1 className="title">Sprint</h1>
      {timer ? (
        <div className={style.wrapper_timer}>
          <Timer timer={timer} timerTime={10} />
        </div>
      ) : <span />}
      {timer && sprintWords[0] ? (
        <GameCard
          id={sprintWords[0].id}
          word={sprintWords[0].word}
          translate={sprintWords[0].translate}
          random={sprintWords[0].random}
        />
      ) : <span />}
      {/* {timer === 0 && (
        <ResultsTable right={currectWords} wrong={wrongWords} />
      )} */}
    </div>

  );
};
