import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import { WordListItem } from '../../components/WordListItem/WordListItem';
import { setGroup } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import style from './TextBook.module.css';

export const TextBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  // useEffect(() => { dispatch(getCard()); }, [dispatch]);

  function changePage(num: number) {
    dispatch(setGroup(num));
    dispatch(getCard());
  }

  return (

    <div>
      <div className={style.container}>
        <button className={style.btn} onClick={() => changePage(0)} type="button">A1 | Elementary</button>
        <button className={style.btn} onClick={() => changePage(1)} type="button">A2 | Pre-Intermediate</button>
        <button className={style.btn} onClick={() => changePage(2)} type="button">B1 | Intermediate</button>
        <button className={style.btn} onClick={() => changePage(3)} type="button">B2 | Upper-Intermediate</button>
        <button className={style.btn} onClick={() => changePage(4)} type="button">C1 | Upper-Intermediate</button>
        <button className={style.btn} onClick={() => changePage(5)} type="button">C2 | Upper-Intermediate</button>
      </div>
      {cards.map((item) => (<WordListItem key={item.id} item={item} />))}
    </div>

  );
};
