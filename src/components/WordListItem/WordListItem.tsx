import React, { useEffect, useState } from 'react';

import { getWordOption, IPostWordOption } from '../../api/getWordOption';
import { URL } from '../../constants/URL';
import { useAppDispatch } from '../../hooks/useAppDispatch';
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

type State = IPostWordOption | number;

export const setDifficultOrLearnedStyle = (options: State) => {
  if (typeof options === 'number') {
    return styles.transparent;
  }
  switch (options.difficulty) {
    case 'hard': return styles.red;
    case 'easy': return styles.green;
    default: return styles.transparent;
  }
};

export const WordListItem = ({ item }: IWordsItemProps) => {
  const difficultState = useAppSelector((state) => state.wordOption.difficultState);
  const [options, setOptions] = useState<State>(0);

  const isLogged = isUserLogIn();

  const borderColor = isLogged && options
    ? setDifficultOrLearnedStyle(options)
    : styles.transparent;

  return (
    <div className={`frame ${styles.card__frame} ${borderColor}`}>
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
        {isLogged && <LoggedBlock item={item} />}
      </div>
    </div>
  );
};
