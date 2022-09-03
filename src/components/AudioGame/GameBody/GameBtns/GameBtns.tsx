import React, { useEffect, useState } from 'react';

import {
  addRightAnswer, resetTimer, setNextWord, stopTimer,
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

  const currentWord = useAppSelector((state) => state.audioChallenge.currentWord);
  const words = useAppSelector((state) => state.audioChallenge.words);
  const nextWord = useAppSelector((state) => state.audioChallenge.nextWord);
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
    }
  }, [currentWord]);

  useEffect(() => {
    if (nextWord) {
      setIsHide(showAnswers(rightId));
    }
  }, [nextWord]);

  const getAnswer = (id: number) => {
    // document.body.style.pointerEvents = 'none';
    if (id === rightId) {
      dispatch(addRightAnswer(currentWord));
    }
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
