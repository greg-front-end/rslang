import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import {
  addRightAnswer, changeCounter, setInRow, setNextWord,
} from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { createBtnsArray } from '../../utils/createBtnsArray';

import { Btn } from './Btn/Btn';

import styles from './GameBtns.module.css';

const BTNS_COUNT = 4;

const WORDS_QUANTITY = 20;

const BTNS_ID = [0, 1, 2, 3];

export const GameBtns = () => {
  const dispatch = useAppDispatch();
  const currentWord = useAppSelector((state) => state.audioChallenge.currentWord);
  const rowCounter = useAppSelector((state) => state.audioChallenge.rowCounter);
  const words = useAppSelector((state) => state.audioChallenge.words);
  const noEasyWords = useAppSelector((state) => state.textBook.noEasyWords);
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  const finish = useAppSelector((state) => state.audioChallenge.finish);

  const [isHide, setIsHide] = useState(Array(4).fill(true));
  const [btns, setBtns] = useState<string[]>([]);

  const [rightId, setRightId] = useState(-1);

  const compair = (word: string) => word === currentWord.wordTranslate;

  const checkAnswer = (id: number) => {
    if (id === rightId) {
      dispatch(addRightAnswer(currentWord));
      dispatch(changeCounter(rowCounter + 1));
    } else {
      dispatch(setInRow(rowCounter));
      dispatch(changeCounter(0));
    }
  };

  const showAnswers = (id: number) => {
    const newState = [...isHide];
    newState[id] = false;
    newState[rightId] = false;
    return newState;
  };

  const getAnswer = (id: number) => {
    checkAnswer(id);
    setIsHide(showAnswers(id));
    dispatch(setNextWord(true));
  };

  const defineID = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = +e.currentTarget.id;
    getAnswer(id);
  };

  const defineBtn = (e: KeyboardEvent) => {
    if (!isHide.every((el) => el)) {
      return;
    }
    const id = +e.key - 1;
    if (BTNS_ID.includes(id)) {
      getAnswer(id);
    }
  };

  useEffect(() => {
    dispatch(changeCounter(0));
  }, []);

  document.addEventListener('keydown', defineBtn);

  useEffect(() => {
    if (!finish) {
      if (words.length) {
        const gBtns = words.length < WORDS_QUANTITY
          ? createBtnsArray(BTNS_COUNT, noEasyWords, currentWord)
          : createBtnsArray(BTNS_COUNT, words, currentWord);
        setRightId(gBtns.reduce((acc, el, i) => (compair(el) ? i : acc), 0));
        setBtns(gBtns);
      }
      setIsHide(Array(4).fill(true));
    }
  }, [currentWord]);

  useEffect(() => {
    if (nextWord) {
      setIsHide(showAnswers(rightId));
    }
  }, [nextWord]);

  useEffect(() => () => {
    document.removeEventListener('keydown', defineBtn);
  });

  return (
    <div className={styles.wrapper}>
      {words.length && btns.map((btn, i) => (
        <Btn
          btn={btn}
          currentWord={currentWord}
          i={i}
          getAnswer={defineID}
          isHide={isHide}
          key={nanoid()}
        />
      ))}
    </div>
  );
};
