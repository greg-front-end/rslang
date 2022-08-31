import React from 'react';

import { URL } from '../../../../constants/URL';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { AudioButton } from '../GameBtns/AudioButton/AudioButton';
import { WordImage } from '../WordImage/WordImage';

import { Word } from './Word';

import styles from './WordItems.module.css';

export const WordItems = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);

  return (
    <div className={styles.pre_wrapper}>
      {Object.keys(item).length && (
        <div className={styles.wrapper}>
          <WordImage />
          <Word />
          <AudioButton path={`${URL}${item.audio}`} />
        </div>
      )}
    </div>
  );
};
