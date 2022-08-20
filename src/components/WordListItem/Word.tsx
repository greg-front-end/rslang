import React from 'react';

import { IWordsItem } from '../../types/IWordsItem';

import { AudioButton } from './AudioButton';

interface IWordsItemProps {
  item: IWordsItem;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
}
// import styles from './LoggedBtns.module.css';

export const Word = ({ item, setAudio }: IWordsItemProps) => (
  <div>
    <h4>{item.word}</h4>
    <AudioButton path={item.audio} setAudio={setAudio} />
  </div>
);
