import React from 'react';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { clearHardWords, setGroup, toggleHardWords } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { isUserLogIn } from '../../utils/isUserLogIn';

import style from './LevelButtons.module.css';

export type Level = {
  level: string,
  name: string,
  group: number
}

export const LevelButton: React.FC<Level> = ({ level, name, group }) => {
  const dispatch = useAppDispatch();

  function changeGroup(num: number) {
    dispatch(setGroup(num));
    localStorage.setItem('group', JSON.stringify(num));
    // isUserLogIn() ? dispatch(getAgregatedCard()) : dispatch(getCard());
    dispatch(clearHardWords());
    dispatch(toggleHardWords(false));
  }

  return (
    <div>
      <button
        onClick={() => changeGroup(group)}
        className={`${style.btn} ${level}`}
        type="button"
      >
        <span>{level}</span>
        <div className={style.boundary} />
        <span>{name}</span>
      </button>
    </div>
  );
};
