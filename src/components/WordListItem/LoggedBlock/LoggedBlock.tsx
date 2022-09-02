import React from 'react';

import { postWordOption } from '../../../api/postWordOption';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IWordsItem } from '../../../types/IWordsItem';

import { Statistic } from './Statistic/Statistic';

import styles from './LoggedBlock.module.css';

interface ILoggedBlockProps {
  item: IWordsItem;
}

export const LoggedBlock = ({ item }: ILoggedBlockProps) => {
  const dispatch = useAppDispatch();
  const addOptions = (e: React.MouseEvent) => {
    console.log('click');
    const options: ICreateWordOptions = {
      difficulty: e.currentTarget.id,
      optional: {
        rigthTime: 0,
      },
      wordId: item.id,
    };
    dispatch(postWordOption(options));
  };

  return (
    <div className={styles.wrapper}>
      <Statistic />
      <div className={styles.btns__wrapper}>
        <button
          type="button"
          className={`btn ${styles.red}`}
          onClick={addOptions}
          id="hard"
        >
          Difficult
        </button>
        <button
          type="button"
          className={`btn ${styles.green}`}
          onClick={addOptions}
          id="easy"
        >
          Learned
        </button>
      </div>
    </div>
  );
};
