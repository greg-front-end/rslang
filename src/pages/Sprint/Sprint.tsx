import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { ResultsTable } from '../../components/ResultsTable/ResultsTable';
import { Timer } from '../../components/Timer/Timer';
import {
  clearCurrectWrongWords,
  clearCurrentWords, clearWrongWords, decrementTimer,
  decrementTimerBeforeGame,
  setInRow,
  setSprintWords, setTimer, setTimerBeforeGame,
} from '../../features/sprintSlice';
import { setPage } from '../../features/textBookSlice';
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
  const loadStatus = useAppSelector((state) => state.textBook.loadStatus);

  useEffect(() => {
    dispatch(setTimerBeforeGame(4));
    dispatch(setTimer(10));
    dispatch(clearCurrectWrongWords());
    dispatch(clearCurrentWords());
    dispatch(clearWrongWords());
    if (previousPage === '/textbook') {
      const removeEasy = cards
        .filter((el) => (el.userWord ? el.userWord.difficulty !== 'easy' : 0));
      dispatch(setSprintWords(randomWords(removeEasy)));
    } else {
      dispatch(setSprintWords(randomWords(cards)));
    }
  }, []);

  useEffect(() => {
    if (sprintWords.length === 0 || !timer) {
      dispatch(setInRow(inRowCounter(currectWrongWords)));
    }

    if (sprintWords.length === 1) {
      if (page >= 1) {
        dispatch(setPage(page - 1));
      }

      isUserLogIn() ? dispatch(getAgregatedCard()) : dispatch(getCard());
    }

    if ((!sprintWords.length || sprintWords.length === 1) && loadStatus === LoadStatus.fulfilled) {
      console.log('if (!sprintWords.length && loadStatus === LoadStatus.fulfilled)');
      dispatch(setSprintWords(randomWords(cards)));
    }
  }, [sprintWords, timer]);

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
