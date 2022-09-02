import React from 'react';

import { getAgregatedCard } from '../../../api/getAggregatedCard';
import { postWordOption } from '../../../api/postWordOption';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IWordsItem } from '../../../types/IWordsItem';

import { Statistic } from './Statistic/Statistic';

import styles from './LoggedBlock.module.css';

interface ILoggedBlockProps {
  item: IWordsItem;
  setOptions: React.Dispatch<React.SetStateAction<string>>;
}

export const LoggedBlock = ({ item, setOptions }: ILoggedBlockProps) => {
  const dispatch = useAppDispatch();
  const toggleHardWords = useAppSelector((state) => state.textBook.switchHardWords);

  const addOptions = (e: React.MouseEvent) => {
    const lvl = e.currentTarget.id;
    // console.log(lvl);
    const options: ICreateWordOptions = {
      difficulty: lvl,
      optional: {
        rigthTime: 0,
      },
      // eslint-disable-next-line no-underscore-dangle
      wordId: item._id,
    };
    setOptions(lvl);
    dispatch(getAgregatedCard());
    dispatch(postWordOption(options));
  };

  return (
    <div className={styles.wrapper}>
      <Statistic />
      <div className={styles.btns__wrapper}>
        {!toggleHardWords && (
          <>
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
          </>
        )}

        {toggleHardWords && (
          <button
            type="button"
            className={`btn ${styles.yellow}`}
            onClick={addOptions}
            id="easy"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};
