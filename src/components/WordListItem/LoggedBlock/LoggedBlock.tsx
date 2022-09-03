import React, { useEffect, useState } from 'react';

import { getAgregatedCard } from '../../../api/getAggregatedCard';
import { getHardWords } from '../../../api/getHardWords';
import { postWordOption } from '../../../api/postWordOption';
import { putWordOption } from '../../../api/putWordOption';
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
  const [click, setClick] = useState(false);
  const [lvl, setLvl] = useState('');
  const dispatch = useAppDispatch();
  const successfulUpdate = useAppSelector((state) => state.wordOption.successfulUpdate);
  const toggleHardWords = useAppSelector((state) => state.textBook.switchHardWords);

  const addOptions = () => {
    const options: ICreateWordOptions = {
      difficulty: lvl,
      optional: {
        rigthTime: 0,
      },
      // eslint-disable-next-line no-underscore-dangle
      wordId: item._id,
    };
    setOptions(lvl);
    dispatch(postWordOption(options));
  };

  const removeFromDifficult = () => {
    const options: ICreateWordOptions = {
      difficulty: 'none',
      optional: {
        rigthTime: 0,
      },
      // eslint-disable-next-line no-underscore-dangle
      wordId: item._id,
    };
    dispatch(putWordOption(options));
  };

  const clickHandler = (e: React.MouseEvent) => {
    if (!toggleHardWords) {
      setLvl(e.currentTarget.id);
    }
    setClick(true);
  };

  useEffect(() => {
    if (click) {
      toggleHardWords ? removeFromDifficult() : addOptions();
    }
  }, [click]);

  useEffect(() => {
    if (click && successfulUpdate === 'fulfilled') {
      toggleHardWords ? dispatch(getHardWords()) : dispatch(getAgregatedCard());
      setClick(false);
    }
  }, [successfulUpdate]);

  return (
    <div className={styles.wrapper}>
      <Statistic />
      <div className={styles.btns__wrapper}>
        {!toggleHardWords && (
          <>
            <button
              type="button"
              className={`btn ${styles.red}`}
              onClick={clickHandler}
              id="hard"
            >
              Difficult
            </button>
            <button
              type="button"
              className={`btn ${styles.green}`}
              onClick={clickHandler}
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
            onClick={clickHandler}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};
