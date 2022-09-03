import React from 'react';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { clearHardWords, setGroup } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { isUserLogIn } from '../../utils/isUserLogIn';
import { setValueLocalStorage } from '../../utils/setValueLocalStorage';

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
    setValueLocalStorage('group', num);
    isUserLogIn() ? dispatch(getAgregatedCard()) : dispatch(getCard());
    dispatch(clearHardWords());
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
