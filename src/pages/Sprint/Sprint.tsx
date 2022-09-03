import React, { useEffect } from 'react';

import { setSprintWords } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { GameCard } from './GameCard';
import { randomWords } from './RandomWords';

export const Sprint = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const sprintWords = useAppSelector((state) => state.textBook.sprintWords);
  console.log('sprintWords: ', sprintWords);

  useEffect(() => {
    dispatch(setSprintWords(randomWords(cards)));
  }, [cards]);

  return (
    <div className="container">
      <h1 className="title">Sprint</h1>
      {sprintWords.map((el) => (
        <GameCard
          word={el.word}
          translate={el.translate}
          random={el.random}
        />
      ))}
      {/* <GameCard /> */}
    </div>

  );
};
