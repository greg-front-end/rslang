import React, { useEffect, useState } from 'react';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getNoEasyWords } from '../../api/getNoEasyWords';
import { AudioGame } from '../../components/AudioGame/AudioGame';
import { setTextBookWords } from '../../features/audioChallengeSlice';
import { setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IWordsItem } from '../../types/IWordsItem';
import { LoadStatus } from '../../types/LoadStatus';
import { getValueLocalStorage } from '../../utils/getValueLocalStorage';

const filterArray = (words: IWordsItem[]) => words.filter((el) => !el.userWord || el.userWord.difficulty !== 'easy');

export const AudioCall = () => {
  const previousPage = JSON.parse(getValueLocalStorage('currentPage') as string);

  const dispatch = useAppDispatch();
  const [startLoading, setStartLoading] = useState(false);
  const isLoad = useAppSelector((state) => state.textBook.loadStatus);
  const curPage = useAppSelector((state) => state.textBook.page);
  const [page, setNewPage] = useState(curPage);
  const [checkArray, setCheckArray] = useState(false);
  const [setGameArr, setSetGameArr] = useState(false);
  const [arr, setArr] = useState<IWordsItem[]>([]);

  const words = useAppSelector((state) => state.textBook.cards);

  useEffect(() => {
    if (previousPage === '/textbook') {
      setCheckArray(true);
    }
    dispatch(getNoEasyWords({
      page: curPage,
      quantity: 10,
    }));
  }, []);

  useEffect(() => {
    if (startLoading) {
      setStartLoading(false);
      dispatch(setPage(page));
      dispatch(getAgregatedCard());
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
        setSetGameArr(true);
      }
    }
  }, [checkArray, isLoad]);

  useEffect(() => {
    if (setGameArr) {
      setSetGameArr(false);
      dispatch(setTextBookWords(arr.slice(0, 20)));
    }
  }, [setGameArr]);

  return (<AudioGame />);
};
