import React from 'react';

import { getCard } from '../../api/getCard';
import { setGroup } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import style from './LevelButtons.module.css';

export const LevelButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  function changeGroup(num: number) {
    dispatch(setGroup(num));
    dispatch(getCard());
  }

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={() => changeGroup(0)} type="button">A1 | Elementary</button>
      <button className={style.btn} onClick={() => changeGroup(1)} type="button">A2 | Pre-Intermediate</button>
      <button className={style.btn} onClick={() => changeGroup(2)} type="button">B1 | Intermediate</button>
      <button className={style.btn} onClick={() => changeGroup(3)} type="button">B2 | Upper-Intermediate</button>
      <button className={style.btn} onClick={() => changeGroup(4)} type="button">C1 | Upper-Intermediate</button>
      <button className={style.btn} onClick={() => changeGroup(5)} type="button">C2 | Upper-Intermediate</button>
    </div>
  );
};
