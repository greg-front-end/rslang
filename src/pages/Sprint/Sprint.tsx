import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import { setGroup, setPage, setSprintWords } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { GameCard } from './GameCard';
import { randomWords } from './RandomWords';

export const Sprint = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const group = useAppSelector((state) => state.textBook.group);
  const sprintWords = useAppSelector((state) => state.textBook.sprintWords);
  useEffect(() => {
    (async () => {
      dispatch(setPage(Number(localStorage.getItem('page'))));
      dispatch(setGroup(Number(localStorage.getItem('group'))));
      dispatch(getCard());
      dispatch(setSprintWords(randomWords(cards)));
    })();
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Sprint</h1>
      {sprintWords.map((el) => <div>{el.word}</div>)}
      <GameCard />
    </div>

  );
};
