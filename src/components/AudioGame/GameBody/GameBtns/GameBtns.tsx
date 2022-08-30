import React, { useEffect, useRef, useState } from 'react';

import { changeCurrentWord, reset } from '../../../../features/audioChallengeSlice';
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
  const [style, setStyle] = useState([styles.sign, styles.green, styles.hide]);
  const compair = (word: string) => word === currentWord.wordTranslate;

  const getAnswer = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    document.body.style.pointerEvents = 'none';

    const btn = event.currentTarget as HTMLElement;
    const span = btn.firstElementChild as HTMLSpanElement;

    btn.style.backgroundColor = 'white';
    console.log('click');
    span.style.visibility = 'visible';
    setStyle([styles.sign, styles.green]);
    document.body.style.pointerEvents = 'auto';
    setTimeout(() => {
      dispatch(reset());
    }, 1000);
  };

  useEffect(() => {
    if (words.length) {
      setBtns(createBtnsArray(BTNS_COUNT, words, currentWord));
    }
    setStyle([styles.sign, styles.green, styles.hide]);
  }, [currentWord]);

  return (
    <div className={styles.wrapper}>
      {words.length && btns.map((btn) => {
        if (compair(btn)) {
          return (
            <button
              type="button"
              className={`${styles.btn}`}
              key={Math.random()}
              onClick={(e) => getAnswer(e)}
            >
              <span
                className={style.join(' ')}
              >
                ✔
              </span>
              <p className={styles.word}>{btn}</p>
            </button>
          );
        }
        return (
          <Btn
            btn={btn}
            currentWord={currentWord}
            getAnswer={getAnswer}
          />
        );
      })}
    </div>
  );
};
