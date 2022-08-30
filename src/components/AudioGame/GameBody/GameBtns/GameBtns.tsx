import React, { useEffect, useRef, useState } from 'react';

import { changeCurrentWord, reset, stopTimer } from '../../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { IWordsItem } from '../../../../types/IWordsItem';
import { createBtnsArray } from '../../utils/createBtnsArray';

import { Btn } from './Btn';

import styles from './GameBtns.module.css';

const BTNS_COUNT = 4;

export const GameBtns = () => {
  const dispatch = useAppDispatch();
  const [btns, setBtns] = useState<string[]>([]);
  const currentWord = useAppSelector((state) => state.audioChallenge.currentWord);
  const words = useAppSelector((state) => state.audioChallenge.words);
  const [isHide, setIsHide] = useState(Array(4).fill(true));
  let rightId = 0;

  const signStyle = {
    color: 'transparent',
  };

  const btnStyle = {
    background: 'white',
  };

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

  const getAnswer = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    document.body.style.pointerEvents = 'none';
    const btnId = +event.currentTarget.id;
    setIsHide(showAnswers(btnId));
    setTimeout(() => {
      dispatch(reset());
      document.body.style.pointerEvents = 'auto';
    }, 1000);
  };

  useEffect(() => {
    if (words.length) {
      setBtns(createBtnsArray(BTNS_COUNT, words, currentWord));
    }
    setIsHide(Array(4).fill(true));
    dispatch(stopTimer(false));
  }, [currentWord]);

  return (
    <div className={styles.wrapper}>
      {words.length && btns.map((btn, i) => {
        if (compair(btn)) {
          return (
            <button
              type="button"
              className={`${styles.btn}`}
              key={Math.random()}
              onClick={(e) => getAnswer(e)}
              id={setId(i, btn)}
              style={isHide[i] ? undefined : btnStyle}
            >
              <span
                className={`${styles.sign} ${styles.green}`}
                style={isHide[i] ? signStyle : undefined}
              >
                ✔
              </span>
              <p className={styles.word}>{btn}</p>
            </button>
          );
        }
        return (
          <button
            type="button"
            className={`${styles.btn}`}
            key={Math.random()}
            onClick={(e) => getAnswer(e)}
            id={setId(i, btn)}
            style={isHide[i] ? undefined : btnStyle}
          >
            <span
              className={`${styles.sign} ${styles.red}`}
              style={isHide[i] ? signStyle : undefined}
            >
              ✘
            </span>
            <p className={styles.word}>{btn}</p>
          </button>
        );
      })}
    </div>
  );
};
