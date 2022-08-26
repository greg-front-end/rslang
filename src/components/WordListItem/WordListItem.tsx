import React from 'react';

import { URL } from '../../constants/URL';
import { IWordsItem } from '../../types/IWordsItem';

import { LoggedBlock } from './LoggedBlock/LoggedBlock';
import { TextWithAudio } from './TextWithAudio/TextWithAudio';
import { Word } from './Word/Word';

import styles from './WordListItem.module.css';

interface IWordsItemProps {
  item: IWordsItem;
}

export const setDifficultOrLearnedStyle = () => styles.red;

export const WordListItem = ({ item }: IWordsItemProps) => {
  const isLogged = false;
  const borderColor = isLogged ? setDifficultOrLearnedStyle() : styles.transparent;
  return (
    <div className={`frame ${styles.card__frame} ${borderColor}`}>
      <div className={styles.img__wrapper}>
        <img src={`${URL}${item.image}`} alt={`${item.word} img`} />
      </div>
      <div className={styles.text__wrapper}>
        <Word item={item} />
        <TextWithAudio
          text={item.textMeaning}
          translate={item.textMeaningTranslate}
          audioPath={item.audioMeaning}
        />
        <TextWithAudio
          text={item.textExample}
          translate={item.textExampleTranslate}
          audioPath={item.audioExample}
        />
        {isLogged && <LoggedBlock />}
      </div>
    </div>
  );
};
