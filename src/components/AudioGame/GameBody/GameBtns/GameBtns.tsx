import React, { useEffect, useState } from 'react';

import { resetTimer, stopTimer } from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { createBtnsArray } from '../../utils/createBtnsArray';

import { Btn } from './Btn';

import styles from './GameBtns.module.css';

const BTNS_COUNT = 4;

export const GameBtns = () => {
  const dispatch = useAppDispatch();

  const currentWord = useAppSelector((state) => state.audioChallenge.currentWord);
  const words = useAppSelector((state) => state.audioChallenge.words);
  const isTimerStop = useAppSelector((state) => state.audioChallenge.timerStop);
  const finish = useAppSelector((state) => state.audioChallenge.finish);

  const [isHide, setIsHide] = useState(Array(4).fill(true));
  const [btns, setBtns] = useState<string[]>([]);

  let rightId: number;

  const compair = (word: string) => word === currentWord.wordTranslate;

  const setId = (id: number, word: string) => {
    if (compair(word)) {
      rightId = id;
    }
    return id.toString();
  };

  const showAnswers = (id: number) => {
    const newState = [...isHide];
    newState[id] = false;
    newState[rightId] = false;
    return newState;
  };

  useEffect(() => {
    if (!finish) {
      if (words.length) {
        setBtns(createBtnsArray(BTNS_COUNT, words, currentWord));
      }
      setIsHide(Array(4).fill(true));
      dispatch(stopTimer(false));
      dispatch(resetTimer());
      document.body.style.pointerEvents = 'auto';
    }
  }, [currentWord]);

  useEffect(() => {
    if (isTimerStop) {
      setIsHide(showAnswers(rightId));
    }
  }, [isTimerStop]);

  const getAnswer = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    document.body.style.pointerEvents = 'none';
    const btnId = +event.currentTarget.id;
    setIsHide(showAnswers(btnId));
    setTimeout(() => {
      dispatch(stopTimer(true));
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      {words.length && btns.map((btn, i) => (
        <Btn
          btn={btn}
          currentWord={currentWord}
          i={i}
          getAnswer={getAnswer}
          isHide={isHide}
          setId={setId}
        />
      ))}
    </div>
  );
};
