import React from 'react';

import { URL } from '../../constants/URL';
import { IWordsItem } from '../../types/IWordsItem';

import { LoggedBtns } from './LoggedBtns/LoggedBtns';
import { TextWithAudio } from './TextWithAudio/TextWithAudio';
import { Word } from './Word/Word';

import styles from './WordListItem.module.css';

interface IWordsItemProps {
  item: IWordsItem;
}

export const WordListItem = ({ item }: IWordsItemProps) => {
  const isLogged = false;
  return (
    <div className={`frame ${styles.card__frame}`}>
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
        {isLogged && <LoggedBtns />}
      </div>
    </div>
  );
};
