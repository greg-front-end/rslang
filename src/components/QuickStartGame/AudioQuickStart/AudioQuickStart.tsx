import React, {
  FC, useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { getNoEasyWords } from '../../../api/getNoEasyWords';
import { setCardsArray } from '../../../features/textBookSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IWordsItem } from '../../../types/IWordsItem';
import { LoadStatus } from '../../../types/LoadStatus';
import { Titlehallenge } from '../../TitleGames/Titlehallenge';

import style from './style.module.css';

interface IAudioQuickStartProps {
  isEasy: boolean;
}

const filterArray = (words: IWordsItem[], page: number) => words.filter((el) => el.page <= page);

export const AudioQuickStart = ({ isEasy }: IAudioQuickStartProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [startLoading, setStartLoading] = useState(false);
  const isLoad = useAppSelector((state) => state.textBook.loadStatus);
  const curPage = useAppSelector((state) => state.textBook.page);
  const [page, setPage] = useState(curPage);
  const [startGame, setStartGame] = useState(false);
  const [checkArray, setCheckArray] = useState(false);

  const words = useAppSelector((state) => state.textBook.cards);
  console.log('words', words);
  const noEasyWords = useAppSelector((state) => state.textBook.noEasyWords);

  const checkElement = (el: IWordsItem) => !el.userWord || el.userWord.difficulty !== 'easy';

  const checkArrLength = (arr: IWordsItem[]) => {
    console.log('checkArrLength', arr);
    if (arr.length === 0) {
      arr.push(...words.filter((el) => checkElement(el)));
      if (arr.length === 0) {
        arr.push(words[0]);
      }
    }
    return arr;
  };

  useEffect(() => {
    if (startLoading) {
      console.log('start loading', page);
      dispatch(getNoEasyWords({
        quantity: 20,
        page,
      }));
      setStartLoading(false);
      setCheckArray(true);
    }
  }, [startLoading]);

  useEffect(() => {
    if (checkArray && isLoad === LoadStatus.fulfilled) {
      setCheckArray(false);
      const arr = filterArray(noEasyWords, curPage);
      console.log('checkArray', arr);
      if (arr.length < 20 && page !== 0) {
        console.log('one more time');
        setPage(page - 1);
        setStartLoading(true);
      } else {
        console.log('play');
        dispatch(setCardsArray(checkArrLength(arr)));
        setStartGame(true);
      }
    }
  }, [checkArray, isLoad]);

  useEffect(() => {
    if (startGame) {
      console.log('game start', words);
      navigate('/games/audiocall');
      setStartGame(false);
    }
  }, [startGame]);

  return (
    <button
      type="button"
      onClick={() => setStartLoading(true)}
      className={`${style.link} ${isEasy ? style.easy : ''}`}
    >
      <Titlehallenge text="Audio Challenge" icon="audio" />
    </button>
  );
};
