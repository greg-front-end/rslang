import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAgregatedCardSprint } from '../../api/getAggregatedCardSprint';
import { getCardSprint } from '../../api/getCardSprint';
import { ResultsTable } from '../../components/ResultsTable/ResultsTable';
import { Timer } from '../../components/Timer/Timer';
import {
  clearCurrectWrongWords,
  clearCurrentWords, clearLoadStatus, clearSprintWords, clearWrongWords, decrementTimer,
  decrementTimerBeforeGame,
  setIndicators,
  setInRow,
  setSprintWords, setTimer, setTimerBeforeGame,
} from '../../features/sprintSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { GamesName } from '../../types/GamesName';
import { LoadStatus } from '../../types/LoadStatus';
import { getValueLocalStorage } from '../../utils/getValueLocalStorage';
import { isUserLogIn } from '../../utils/isUserLogIn';

import { GameCard } from './GameCard';
import { inRowCounter } from './inRowCounter';
import { randomWords } from './RandomWords';

import style from './Sprint.module.css';

export const Sprint = () => {
  const previousPage = JSON.parse(getValueLocalStorage('currentPage') as string);
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const sprintWords = useAppSelector((state) => state.sprint.sprintWords);
  const currectWrongWords = useAppSelector((state) => state.sprint.currectWrongWords);
  const currectWords = useAppSelector((state) => state.sprint.currectWords);
  const wrongWords = useAppSelector((state) => state.sprint.wrongWords);
  const timer = useAppSelector((state) => state.sprint.timer);
  const timerBeforeGame = useAppSelector((state) => state.sprint.timerBeforeGame);
  const inRow = useAppSelector((state) => state.sprint.inRow);
  const page = useAppSelector((state) => state.textBook.page);
  const buffer = useAppSelector((state) => state.sprint.buffer);
  const loadStatus = useAppSelector((state) => state.sprint.loadStatus);

  useEffect(() => {
    dispatch(setIndicators([false, false, false]));
    dispatch(clearSprintWords());
    dispatch(setTimerBeforeGame(4));
    dispatch(setTimer(10));
    dispatch(clearCurrectWrongWords());
    dispatch(clearCurrentWords());
    dispatch(clearWrongWords());
    dispatch(clearLoadStatus());
    if (previousPage === '/textbook') {
      const removeEasy = cards
        .filter((el) => (el.userWord ? el.userWord.difficulty !== 'easy' : 0));
      dispatch(setSprintWords(randomWords(removeEasy)));
      dispatch(getAgregatedCardSprint(page - 1));
    } else {
      dispatch(setSprintWords(randomWords(cards)));
      dispatch(getCardSprint(page - 1));
    }
  }, []);

  useEffect(() => {
    if (loadStatus === LoadStatus.fulfilled) {
      if (previousPage === '/textbook') {
        const removeEasy = buffer
          .filter((el) => (el.userWord ? el.userWord.difficulty !== 'easy' : 0));
        dispatch(setSprintWords(randomWords(removeEasy)));
      } else {
        dispatch(setSprintWords(randomWords(buffer)));
      }
    }
  }, [loadStatus]);

  useEffect(() => {
    if (sprintWords.length === 0 || !timer) {
      dispatch(setInRow(inRowCounter(currectWrongWords)));
    }

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
      {!timer || !sprintWords.length
        ? (
          <ResultsTable
            right={currectWords}
            wrong={wrongWords}
            inRow={inRow}
            game={GamesName.Sprint}
          />
        )
        : <span />}
    </div>
  );
};
