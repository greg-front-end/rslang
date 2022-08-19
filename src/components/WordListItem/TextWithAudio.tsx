import React from 'react';

import { IWordsItem } from '../../types/IWordsItem';

import { AudioButton } from './AudioButton';

interface IWordsItemProps {
  item: IWordsItem;
}
// import styles from './LoggedBtns.module.css';

export const TextWithAudio = ({ }: IWordsItemProps) => (
  <div>
    <span>{item.word}</span>
    <AudioButton path={item.audioMeaning} />
  </div>
);
