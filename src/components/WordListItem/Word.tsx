import React from 'react';

import { IWordsItem } from '../../types/IWordsItem';

import { AudioButton } from './AudioButton';

interface IWordsItemProps {
  item: IWordsItem;
}
// import styles from './LoggedBtns.module.css';

export const Word = ({ item }: IWordsItemProps) => (
  <div>
    <h4>{item.word}</h4>
    <AudioButton path={item.audio} />
  </div>
);
