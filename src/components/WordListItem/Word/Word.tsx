import React from 'react';

import { IWordsItem } from '../../../types/IWordsItem';
import { AudioButton } from '../AudioButton/AudioButton';

import { ReactComponent as AudioIcon } from './word-audio.svg';

import styles from './Word.module.css';

interface IWordsItemProps {
  item: IWordsItem;
}

const textColor = {
  color: '#875DFE',
};

export const Word = ({ item }: IWordsItemProps) => (
  <div className={styles.title__wrapper}>
    <div>
      <h4 className={`${styles.title}`} style={textColor}>
        {item.word}
        <span className={styles.transcription}>{item.transcription}</span>
      </h4>
      <span className={styles.translate}>{item.wordTranslate}</span>
    </div>
    <AudioButton path={item.audio} Icon={AudioIcon} />
  </div>
);
