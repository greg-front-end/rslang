import React from 'react';

import { getCard } from '../../api/getCard';
import { setPage, setPageButtons } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { PageButtons } from './PageButtons';

import style from './Pagination.module.css';

export const Pagination: React.FC = () => {
  const page = useAppSelector((state) => state.textBook.page);
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);
  console.log(pageButtons);

  const dispatch = useAppDispatch();

  function changePage(num: number) {
    dispatch(setPage(num));
    dispatch(getCard());
  }

  function increment() {
    if (page !== 29) {
      if (page === pageButtons[pageButtons.length - 1]) {
        const arr = pageButtons.map((el) => el + 1);
        dispatch(setPageButtons(arr));
        changePage(page + 1);
      } else {
        changePage(page + 1);
      }
    }
  }
  function decrement() {
    if (page !== 0) {
      if (page === pageButtons[0]) {
        const arr = pageButtons.map((el) => el - 1);
        dispatch(setPageButtons(arr));
        changePage(page - 1);
      } else {
        changePage(page - 1);
      }
    }
  }

  return (
    <div className={style.container}>
      <button onClick={() => decrement()} className={style.btn} type="button">←</button>
      <PageButtons />
      <button onClick={() => increment()} className={style.btn} type="button">→</button>
    </div>
  );
};
