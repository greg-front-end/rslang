import React from 'react';

import { IWordsItem } from '../../types/IWordsItem';

import { GameBody } from './GameBody/GameBody';
import { GameContextProvider } from './GameContext/GameContext';
import { mixArray } from './utils/mixArray';

import styles from './AudioGame.module.css';

interface IAudioGameProps {
  items: IWordsItem[];
}

export const AudioGame = ({ items }: IAudioGameProps) => {
  const words = mixArray(items);
  const isLogged = false;
  return (
    <GameContextProvider value={items}>
      <div className={styles.wrapper}>
        <GameBody />
      </div>
    </GameContextProvider>
  );
};
