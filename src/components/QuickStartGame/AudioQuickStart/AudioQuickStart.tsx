/* eslint-disable no-debugger */
import React, {
  FC, useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { getAgregatedCard } from '../../../api/getAggregatedCard';
import { getNoEasyWords } from '../../../api/getNoEasyWords';
import { setCardsArray, setPage } from '../../../features/textBookSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IWordsItem } from '../../../types/IWordsItem';
import { LoadStatus } from '../../../types/LoadStatus';
import { Titlehallenge } from '../../TitleGames/Titlehallenge';

import style from './style.module.css';

interface IAudioQuickStartProps {
  isEasy: boolean;
}

const filterArray = (words: IWordsItem[]) => words.filter((el) => !el.userWord || el.userWord.difficulty !== 'easy');

export const AudioQuickStart = ({ isEasy }: IAudioQuickStartProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [startLoading, setStartLoading] = useState(false);
  const isLoad = useAppSelector((state) => state.textBook.loadStatus);
  const curPage = useAppSelector((state) => state.textBook.page);
  const [page, setNewPage] = useState(curPage);
  const [startGame, setStartGame] = useState(false);
  const [checkArray, setCheckArray] = useState(false);
  const [arr, setArr] = useState<IWordsItem[]>([]);

  const words = useAppSelector((state) => state.textBook.cards);

  const noEasyWords = useAppSelector((state) => state.textBook.noEasyWords);

  const checkElement = (el: IWordsItem) => !el.userWord || el.userWord.difficulty !== 'easy';

  const checkArrLength = (a: IWordsItem[]) => {
    if (a.length === 0) {
      a.push(...words.filter((el) => checkElement(el)));
      if (a.length === 0) {
        a.push(words[0]);
      }
    }
    return a;
  };

  useEffect(() => {
    dispatch(getNoEasyWords({
      page: curPage,
      quantity: 10,
    }));
  }, []);

  useEffect(() => {
    if (startLoading) {
      dispatch(setPage(page));
      dispatch(getAgregatedCard());
      setStartLoading(false);
      setCheckArray(true);
    }
  }, [startLoading]);

  useEffect(() => {
    if (checkArray && isLoad === LoadStatus.fulfilled) {
      setCheckArray(false);
      setArr((state) => [...state, ...filterArray(words)]);
      if (arr.length < 20 && page !== 0) {
        setNewPage(page - 1);
        setStartLoading(true);
      } else {
        dispatch(setCardsArray(checkArrLength(arr.length > 20
          ? arr.slice(20)
          : arr)));
        setStartGame(true);
      }
    }
  }, [checkArray, isLoad]);

  useEffect(() => {
    if (startGame) {
      navigate('/games/audiocall');
      setStartGame(false);
    }
  }, [startGame]);

  return (
    <button
      type="button"
      onClick={() => setCheckArray(true)}
      className={`${style.link} ${isEasy ? style.easy : ''}`}
    >
      <Titlehallenge text="Audio Challenge" icon="audio" />
    </button>
  );
};
