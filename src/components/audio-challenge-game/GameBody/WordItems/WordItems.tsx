import React, { useContext } from 'react';

import { URL } from '../../../../constants/URL';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { IWordsItem } from '../../../../types/IWordsItem';
import { GameContext } from '../../GameContext/GameContext';
import { AudioButton } from '../AudioButton/AudioButton';

// import { mixArray } from './utils/mixArray';
import styles from './WordItems.module.css';

interface IWordItemsProps {
  item: IWordsItem;
}

export const WordItems = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  console.log(item);

  return (
    <div>
      {Object.keys(item).length && (
        <div className={styles.wrapper}>
          <img src={`${URL}${item.image}`} alt={item.word} />
          <span>{item.word}</span>
          <AudioButton path={`${URL}${item.audio}`} />
        </div>
      )}
    </div>
  );
};
