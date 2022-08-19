import React from 'react';

import { IWordsItem } from '../../types/IWordsItem';

import { LoggedBtns } from './LoggedBtns';
import { TextWithAudio } from './TextWithAudio';
import { Word } from './Word';

import styles from './WordListItem.module.css';

interface IWordsItemProps {
  item: IWordsItem;
  isLogged: boolean;
}

export const WordListItem = ({ item, isLogged }: IWordsItemProps) => (
  <div className={styles.wrapper}>
    <Word item={item} />
    <span>{item.transcription}</span>
    <span>{item.wordTranslate}</span>
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
    <img src={`https://rslang-mdg.herokuapp.com/${item.image}`} alt={`${item.word} img`} />
    {isLogged && <LoggedBtns />}
  </div>
);
