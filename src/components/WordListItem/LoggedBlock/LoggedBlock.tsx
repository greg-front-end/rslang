import React from 'react';

import { postWordOption } from '../../../api/postWordOption';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IUserWord } from '../../../types/IUserWord';
import { IWordsItem } from '../../../types/IWordsItem';

import { Statistic } from './Statistic/Statistic';

import styles from './LoggedBlock.module.css';

interface ILoggedBlockProps {
  item: IWordsItem;
  setOptions: React.Dispatch<React.SetStateAction<IUserWord>>;
}

export const LoggedBlock = ({ item, setOptions }: ILoggedBlockProps) => {
  const dispatch = useAppDispatch();

  const addOptions = (e: React.MouseEvent) => {
    const lvl = e.currentTarget.id;
    const options: ICreateWordOptions = {
      difficulty: lvl,
      optional: {
        rigthTime: 0,
      },
      // eslint-disable-next-line no-underscore-dangle
      wordId: item._id,
    };
    setOptions((state) => {
      const newState = {
        ...state,
        difficulty: lvl,
      };
      return newState;
    });
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
