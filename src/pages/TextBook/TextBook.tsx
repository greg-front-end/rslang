import React, { useEffect } from 'react';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { LevelButtons, levels } from '../../components/LevelButtons/LevelButtons';
import { Pagination } from '../../components/Pagination/Pagination';
import { QuickStartGame } from '../../components/QuickStartGame/QuickStartGame';
import { WordListItem } from '../../components/WordListItem/WordListItem';
import { setGroup, setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getValueLocalStorage } from '../../utils/getValueLocalStorage';
import { isUserLogIn } from '../../utils/isUserLogIn';

import style from './TextBook.module.css';

export const TextBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const hardWords = useAppSelector((state) => state.textBook.hardWords);
  const group = useAppSelector((state) => state.textBook.group);
  useEffect(() => {
    dispatch(setPage(Number(getValueLocalStorage('page'))));
    dispatch(setGroup(Number(getValueLocalStorage('group'))));
    isUserLogIn() ? dispatch(getAgregatedCard()) : dispatch(getCard());
  }, [dispatch]);

  return (
    <div className={isUserLogIn() ? 'container_login' : 'container'}>
      <div className={style.wrapper}>
        <h2 className={`title ${levels[group].level}`}>{`${levels[group].level} ${levels[group].name}`}</h2>
        {!hardWords.length && <Pagination />}
        <LevelButtons />
        <div className={style.wrapper_QuickStartGame}>
          <QuickStartGame />
        </div>
        {(hardWords.length ? hardWords : cards)
          .map((item) => (<WordListItem key={item.id} item={item} />))}
      </div>
    </div>
  );
};
