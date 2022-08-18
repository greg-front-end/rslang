import React from 'react';

import { IItem } from '../../types/IItem';

import { AudioButton } from './AudioButton';
import { LoggedBtns } from './LoggedBtns';

import styles from './WordListItem.module.css';

interface IItemProps {
  item: IItem;
  isLogged: boolean;
}

export const WordListItem = ({ item, isLogged }: IItemProps) => (
  <div className={styles.wrapper}>
    <h4>{item.word}</h4>
    <span>{item.transcription}</span>
    <span>{item.wordTranslate}</span>
    <span dangerouslySetInnerHTML={{ __html: item.textMeaning }} />
    <span>{item.textMeaningTranslate}</span>
    <span dangerouslySetInnerHTML={{ __html: item.textExample }} />
    <span>{item.textExampleTranslate}</span>
    <img src={`https://rslang-mdg.herokuapp.com/${item.image}`} alt={`${item.word} img`} />
    <AudioButton item={item} />
    {isLogged && <LoggedBtns />}
  </div>
);
