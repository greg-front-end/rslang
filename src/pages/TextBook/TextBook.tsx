import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import { LevelButtons, levels } from '../../components/LevelButtons/LevelButtons';
import { Pagination } from '../../components/Pagination/Pagination';
import { WordListItem } from '../../components/WordListItem/WordListItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import style from './TextBook.module.css';

export const TextBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const group = useAppSelector((state) => state.textBook.group);
  useEffect(() => { dispatch(getCard()); }, [dispatch]);

  return (

    <div className={style.container}>
      <h2 className={`title title-textbook ${levels[group].level}`}>{`${levels[group].level} ${levels[group].name}`}</h2>
      <Pagination />
      <LevelButtons />
      {cards.map((item) => (<WordListItem key={item.id} item={item} />))}
    </div>

  );
};
