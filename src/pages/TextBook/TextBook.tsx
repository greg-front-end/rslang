import React, { useEffect } from 'react';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { getHardWords } from '../../api/getHardWords';
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
  const hardWords = useAppSelector((state) => state.textBook.hardWords);
  const group = useAppSelector((state) => state.textBook.group);
  const toggleHardWords = useAppSelector((state) => state.textBook.switchHardWords);
  const toggleDispatchWords = () => (toggleHardWords
    ? dispatch(getHardWords())
    : dispatch(getAgregatedCard()));
  useEffect(() => {
    dispatch(setPage(Number(localStorage.getItem('page'))));
    dispatch(setGroup(Number(localStorage.getItem('group'))));
    isUserLogIn() ? toggleDispatchWords() : dispatch(getCard());
    // dispatch(getCard());
  }, [toggleHardWords, group]);

  return (
    <div className={isUserLogIn() ? 'container_login' : 'container'}>
      <div className={style.wrapper}>
        <h2 className={`title ${levels[group].level}`}>{`${levels[group].level} ${levels[group].name}`}</h2>
        {!hardWords.length && <Pagination />}
        <LevelButtons />
        <div className={style.wrapper_QuickStartGame}>
          <QuickStartGame />
        </div>
        {(toggleHardWords ? hardWords : cards)
          .map((item) => (<WordListItem key={item.id} item={item} />))}
      </div>
    </div>
  );
};
