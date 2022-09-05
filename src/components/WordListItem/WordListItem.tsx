import React, { useEffect, useState } from 'react';

import { URL } from '../../constants/URL';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IWordsItem } from '../../types/IWordsItem';
import { isUserLogIn } from '../../utils/isUserLogIn';

import { LoggedBlock } from './LoggedBlock/LoggedBlock';
import { TextWithAudio } from './TextWithAudio/TextWithAudio';
import { Word } from './Word/Word';

import styles from './WordListItem.module.css';

interface IWordsItemProps {
  item: IWordsItem;
}

type State = string;

const setDifficultOrLearnedStyle = (options: State) => {
  switch (options) {
    case 'hard': return styles.red;
    case 'easy': return styles.green;
    default: return styles.transparent;
  }
};

export const WordListItem = ({ item }: IWordsItemProps) => {
  const dif = item.userWord ? item.userWord.difficulty : '';
  const cards = useAppSelector((state) => state.textBook.cards);
  const hardWords = useAppSelector((state) => state.textBook.hardWords);
  const [difficulty, setDifficulty] = useState(dif);

  const isLogged = isUserLogIn();

  const borderColor = isLogged
    ? setDifficultOrLearnedStyle(difficulty)
    : styles.transparent;

  useEffect(() => {
    setDifficulty(dif);
  }, [cards, hardWords]);

  return (
    <div className={`frame ${styles.card__frame} ${borderColor}`}>
      <svg width="30" height="57" viewBox="0 0 30 57" className={`${styles.flag} ${borderColor}`}>
        <path d="M30 2.10926C30 0.485877 29.5273 -1.07102 28.6858 -2.21893C27.8443 -3.36683 26.7031 -4.01172 25.513 -4.01172H4.48701C3.29698 -4.01172 2.1557 -3.36683 1.31423 -2.21893C0.472755 -1.07102 2.10255e-05 0.485877 2.10255e-05 2.10926V50.0447C7.42957e-05 51.1453 0.217655 52.2255 0.629856 53.1716C1.04206 54.1177 1.63363 54.8947 2.34228 55.4208C3.05094 55.9468 3.85046 56.2025 4.65667 56.1609C5.46288 56.1193 6.24596 55.7819 6.92344 55.1843L15 48.0656L23.0766 55.1843C23.7541 55.7814 24.537 56.1183 25.343 56.1596C26.149 56.201 26.9482 55.9452 27.6566 55.4192C28.365 54.8932 28.9564 54.1164 29.3685 53.1706C29.7807 52.2248 29.9983 51.145 29.9985 50.0447V2.10926H30ZM27.0087 2.10926V50.0447C27.0083 50.4111 26.9356 50.7707 26.7982 51.0855C26.6608 51.4004 26.4638 51.659 26.2279 51.8341C25.9919 52.0092 25.7257 52.0944 25.4573 52.0808C25.1889 52.0671 24.9281 51.9551 24.7024 51.7565L15.8122 43.9217C15.5702 43.7082 15.2882 43.5947 15 43.5947C14.7119 43.5947 14.4298 43.7082 14.1879 43.9217L5.29766 51.7565C5.07192 51.9551 4.81115 52.0671 4.54272 52.0808C4.27429 52.0944 4.00813 52.0092 3.77218 51.8341C3.53623 51.659 3.33921 51.4004 3.20181 51.0855C3.06442 50.7707 2.99172 50.4111 2.99135 50.0447V2.10926C2.99135 1.56813 3.14892 1.04917 3.42942 0.666532C3.70991 0.283897 4.09033 0.0689344 4.48701 0.0689344H25.513C25.9097 0.0689344 26.2901 0.283897 26.5706 0.666532C26.8511 1.04917 27.0087 1.56813 27.0087 2.10926Z" />
      </svg>
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
        {isLogged && (
          <LoggedBlock
            item={item}
            setOptions={setDifficulty}
          />
        )}
      </div>
    </div>
  );
};
