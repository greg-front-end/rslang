import React from 'react';

import { IWordsItem } from '../../types/IWordsItem';

import { LoggedBtns } from './LoggedBtns';
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
    <span dangerouslySetInnerHTML={{ __html: item.textMeaning }} />
    <span>{item.textMeaningTranslate}</span>
    <span dangerouslySetInnerHTML={{ __html: item.textExample }} />
    <span>{item.textExampleTranslate}</span>
    <img src={`https://rslang-mdg.herokuapp.com/${item.image}`} alt={`${item.word} img`} />
    {isLogged && <LoggedBtns />}
  </div>
);
