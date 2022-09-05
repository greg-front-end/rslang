import React from 'react';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { IWordsItem } from '../../../types/IWordsItem';
import { AudioButton } from '../AudioButton/AudioButton';

import { getColor } from './getColor';
import { ReactComponent as AudioIcon } from './word-audio.svg';

import styles from './Word.module.css';

interface IWordsItemProps {
  item: IWordsItem;
}

export const Word = ({ item }: IWordsItemProps) => {
  const group = useAppSelector((state) => state.textBook.group);
  const hard = useAppSelector((state) => state.textBook.switchHardWords);
  return (
    <div className={styles.title__wrapper}>
      <div>
        <h4 className={`${styles.title} ${getColor(hard ? -1 : group)}`}>
          {item.word}
          <span className={styles.transcription}>{item.transcription}</span>
        </h4>
        <span className={styles.translate}>{item.wordTranslate}</span>
      </div>
      <AudioButton path={item.audio} Icon={AudioIcon} />
    </div>
  );
};
