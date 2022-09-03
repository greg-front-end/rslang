import React, { useEffect, useState } from 'react';

import {
  addRightAnswer, setInRow, setNextWord,
} from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { createBtnsArray } from '../../utils/createBtnsArray';

import { Btn } from './Btn/Btn';

import styles from './GameBtns.module.css';

const BTNS_COUNT = 4;

const BTNS_ID = [0, 1, 2, 3];

export const GameBtns = () => {
  const dispatch = useAppDispatch();
  const [rowCounter, setRowCounter] = useState(0);
  const currentWord = useAppSelector((state) => state.audioChallenge.currentWord);
  const words = useAppSelector((state) => state.audioChallenge.words);
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
  const finish = useAppSelector((state) => state.audioChallenge.finish);
  if (finish) {
    dispatch(setInRow(rowCounter));
  }

  const [isHide, setIsHide] = useState(Array(4).fill(true));
  const [btns, setBtns] = useState<string[]>([]);

  const [rightId, setRightId] = useState(-1);

  const compair = (word: string) => word === currentWord.wordTranslate;

  const setId = (id: number, word: string) => {
    if (compair(word)) {
      setRightId(id);
    }
    return id.toString();
  };

  const showAnswers = (id: number) => {
    if (id === rightId) {
      console.log('right');

      dispatch(addRightAnswer(currentWord));
      setRowCounter((state) => state + 1);
    } else {
      console.log('wrong');
      dispatch(setInRow(rowCounter));
      setRowCounter(0);
    }
    const newState = [...isHide];
    newState[id] = false;
    newState[rightId] = false;
    return newState;
  };

  const getAnswer = (id: number) => {
    setIsHide(showAnswers(id));
    dispatch(setNextWord(true));
  };

  const defineID = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = +e.currentTarget.id;
    getAnswer(id);
  };

  const defineBtn = (e: KeyboardEvent) => {
    const id = +e.key - 1;
    if (BTNS_ID.includes(id)) {
      getAnswer(id);
    }
  };

  useEffect(() => {
    if (!finish) {
      if (words.length) {
        const gBtns = createBtnsArray(BTNS_COUNT, words, currentWord);
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

  useEffect(() => {
    document.addEventListener('keydown', defineBtn);

    return () => {
      document.removeEventListener('keydown', defineBtn);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {words.length && btns.map((btn, i) => (
        <Btn
          btn={btn}
          currentWord={currentWord}
          i={i}
          getAnswer={defineID}
          isHide={isHide}
          setId={setId}
          key={Date.now() + Math.random()}
        />
      ))}
    </div>
  );
};
