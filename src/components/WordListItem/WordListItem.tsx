import React, { useState } from 'react';

import { URL } from '../../constants/URL';
import { IWordsItem } from '../../types/IWordsItem';

import { LoggedBtns } from './LoggedBtns';
import { TextWithAudio } from './TextWithAudio';
import { Word } from './Word';

import styles from './WordListItem.module.css';

interface IWordsItemProps {
  item: IWordsItem;
  isLogged: boolean;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
}

export const WordListItem = ({ item, isLogged, setAudio }: IWordsItemProps) => (
  <div className={styles.wrapper}>
    <Word item={item} setAudio={setAudio} />
    <span>{item.transcription}</span>
    <span>{item.wordTranslate}</span>
    <TextWithAudio
      text={item.textMeaning}
      translate={item.textMeaningTranslate}
      audioPath={item.audioMeaning}
      setAudio={setAudio}
    />
    <TextWithAudio
      text={item.textExample}
      translate={item.textExampleTranslate}
      audioPath={item.audioExample}
      setAudio={setAudio}
    />
    <img src={`${URL}${item.image}`} alt={`${item.word} img`} />
    {isLogged && <LoggedBtns />}
  </div>
);
