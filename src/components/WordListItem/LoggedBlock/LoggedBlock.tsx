/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import { getHardWords } from '../../../api/getHardWords';
import { postWordOption } from '../../../api/postWordOption';
import { putWordOption } from '../../../api/putWordOption';
import { deleteFromHardWords, filterCard } from '../../../features/textBookSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { DifLvls, ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IWordsItem } from '../../../types/IWordsItem';
import { LoadStatus } from '../../../types/LoadStatus';

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
    const options: ICreateWordOptions = item.userWord
      ? {
        optional: {
          ...item.userWord.optional,
          rightInRow: lvl === 'hard' ? 0 : item.userWord.optional.rightInRow,
        },
        difficulty: lvl,
        wordId: item._id,
      }
      : {
        difficulty: lvl,
        optional: {
          right: 0,
          wrong: 0,
          rightInRow: 0,
        },
        wordId: item._id,
      };
    dispatch(postWordOption(options));
    dispatch(filterCard(options));
    setClick(false);
  };

  const removeFromDifficult = () => {
    setClick(true);
    const options: ICreateWordOptions = {
      ...item.userWord,
      difficulty: 'none',
      wordId: item._id,
    };
    dispatch(putWordOption(options));
    dispatch(filterCard(options));
    dispatch(deleteFromHardWords(item._id));
  };

  const clickHandler = (e: React.MouseEvent) => {
    setLvl(e.currentTarget.id);
    setClick(true);
  };

  useEffect(() => {
    if (click) {
      toggleHardWords ? removeFromDifficult() : addOptions();
    }
  }, [click]);

  useEffect(() => {
    if (click && successfulUpdate === LoadStatus.fulfilled && toggleHardWords) {
      // dispatch(getHardWords());
      setClick(false);
    }
  }, [successfulUpdate]);

  return (
    <div className={styles.wrapper}>
      <Statistic item={item} />
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
