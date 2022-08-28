import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import { LevelButtons } from '../../components/LevelButtons/LevelButtons';
import { Pagination } from '../../components/Pagination/Pagination';
import { WordListItem } from '../../components/WordListItem/WordListItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import style from './TextBook.module.css';

export const TextBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  useEffect(() => { dispatch(getCard()); }, [dispatch]);

  return (

    <div className={style.container}>
      <Pagination />
      <LevelButtons />
      {cards.map((item) => (<WordListItem key={item.id} item={item} />))}
    </div>

  );
};
