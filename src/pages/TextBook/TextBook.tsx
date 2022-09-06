import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { getHardWords } from '../../api/getHardWords';
import { LevelButtons, levels } from '../../components/LevelButtons/LevelButtons';
import { Pagination } from '../../components/Pagination/Pagination';
import { QuickStartGame } from '../../components/QuickStartGame/QuickStartGame';
import { TextBookContext } from '../../components/TextBookContext/TextBookContext';
import { WordListItem } from '../../components/WordListItem/WordListItem';
import { setGroup, setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { LoadStatus } from '../../types/LoadStatus';
import { getValueLocalStorage } from '../../utils/getValueLocalStorage';
import { isUserLogIn } from '../../utils/isUserLogIn';

import style from './TextBook.module.css';

export const TextBook: React.FC = () => {
  const [audio, setAudio] = useState(new Audio());
  const [isEasy, setIsEasy] = useState(false);
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const loadStatus = useAppSelector((state) => state.textBook.loadStatus);
  const hardWords = useAppSelector((state) => state.textBook.hardWords);
  const page = useAppSelector((state) => state.textBook.page);
  const group = useAppSelector((state) => state.textBook.group);

  const toggleHardWords = useAppSelector((state) => state.textBook.switchHardWords);
  const toggleDispatchWords = () => (toggleHardWords
    ? dispatch(getHardWords())
    : dispatch(getAgregatedCard())
  );

  useEffect(() => {
    dispatch(setPage(Number(getValueLocalStorage('page'))));
    dispatch(setGroup(Number(getValueLocalStorage('group'))));

    isUserLogIn() ? toggleDispatchWords() : dispatch(getCard());
  }, [page, group, toggleHardWords]);

  useEffect(() => {
    if (loadStatus === LoadStatus.fulfilled) {
      const easyWords = cards
        .filter((el) => (el.userWord ? el.userWord.difficulty === 'easy' : 0));
      const easy = easyWords.length === cards.length;
      setIsEasy(easy);
    }
  }, [loadStatus, cards]);

  return (
    <TextBookContext value={{ audio, setAudio, isEasy }}>
      <div className={isUserLogIn() ? 'container_login' : 'container'}>
        <div className={style.wrapper}>
          <h2 className={!toggleHardWords ? `title ${levels[group].level}` : 'title hard_group'}>
            {
              !toggleHardWords
                ? `${levels[group].level} ${levels[group].name}`
                : 'Hard words'
            }
          </h2>
          {!toggleHardWords && <Pagination />}
          <LevelButtons />
          <div className={style.wrapper_QuickStartGame}>
            {!toggleHardWords && <QuickStartGame />}
          </div>
          {(toggleHardWords ? hardWords : cards)
            .map((item) => (<WordListItem key={nanoid()} item={item} />))}
        </div>
      </div>
    </TextBookContext>
  );
};
