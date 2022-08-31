import React, { useEffect } from 'react';

import { setInitState } from '../../features/audioChallengeSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { GameBody } from './GameBody/GameBody';
import { setStartGameState } from './utils/setStartGameState';

import styles from './AudioGame.module.css';

export const AudioGame = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  useEffect(() => {
    if (cards.length) {
      dispatch(setInitState(setStartGameState(cards)));
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <GameBody />
    </div>
  );
};
