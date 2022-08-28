import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import {
  changeCurrentWord, changeWords, clearUsedWords, setInitState,
} from '../../features/audioChallengeSlice';
import { setGroup } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IWordsItem } from '../../types/IWordsItem';

import { GameBody } from './GameBody/GameBody';
import { GameContextProvider } from './GameContext/GameContext';
import { getRandomNum } from './utils/getRandomNum';
import { mixArray } from './utils/mixArray';
import { setStartGameState } from './utils/setStartGameState';

import styles from './AudioGame.module.css';

export const AudioGame = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const words = mixArray(cards);
  useEffect(() => {
    if (words.length) {
      dispatch(setInitState(setStartGameState(words)));
    }
  }, [cards]);

  return (
    // <GameContextProvider value={words}>
    <div className={styles.wrapper}>
      <GameBody />
    </div>
    // </GameContextProvider>
  );
};
