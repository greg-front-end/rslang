import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import { LevelButtons, levels } from '../../components/LevelButtons/LevelButtons';
import { Pagination } from '../../components/Pagination/Pagination';
import { QuickStartGame } from '../../components/QuickStartGame/QuickStartGame';
import { WordListItem } from '../../components/WordListItem/WordListItem';
import { setGroup, setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { isUserLogIn } from '../../utils/isUserLogIn';

import style from './TextBook.module.css';

export const TextBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const group = useAppSelector((state) => state.textBook.group);
  useEffect(() => {
    dispatch(setPage(Number(localStorage.getItem('page'))));
    dispatch(setGroup(Number(localStorage.getItem('group'))));
    dispatch(getCard());
  }, [dispatch]);

  return (
    <div className={isUserLogIn() ? 'container_login' : 'container'}>
      <div className={style.wrapper}>
        <h2 className={`title ${levels[group].level}`}>{`${levels[group].level} ${levels[group].name}`}</h2>
        <Pagination />
        <LevelButtons />
        <QuickStartGame />
        {cards.map((item) => (<WordListItem key={item.id} item={item} />))}
      </div>
    </div>
  );
};
