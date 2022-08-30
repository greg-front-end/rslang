import React from 'react';

import { URL } from '../../../../constants/URL';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import Plug from '../../img/img-plug.svg';
import { AudioButton } from '../AudioButton/AudioButton';

import styles from './WordItems.module.css';

const firstLetToUpCase = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const WordItems = () => {
  const item = useAppSelector((state) => state.audioChallenge.currentWord);
  console.log('item', item);

  return (
    <div className={styles.pre_wrapper}>
      {Object.keys(item).length && (
        <div className={styles.wrapper}>
          <div className={styles.img__wrapper}>
            <img
              src={`${URL}${item.image}`}
              alt={item.word}
              className={styles.img}
            />
            <img
              src={Plug}
              alt={item.word}
              className={styles.plug}
            />
          </div>
          <span className={styles.word}>{firstLetToUpCase(item.word)}</span>
          <AudioButton path={`${URL}${item.audio}`} />
        </div>
      )}
    </div>
  );
};
