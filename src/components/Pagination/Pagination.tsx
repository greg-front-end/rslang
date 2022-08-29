/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEvent } from 'react';

import { getCard } from '../../api/getCard';
import { ReactComponent as LeftIcon } from '../../assets/svg/pagination-arrow-left.svg';
import { ReactComponent as RightIcon } from '../../assets/svg/pagination-arrow-right.svg';
import { setPage, setPageButtons } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { PageButtons } from './PageButtons';

import style from './Pagination.module.css';

const color = ['#875CFF', '#FF9B8C', '#B0E021', '#F2B233', '#64E3FF', '#00FFCE'];

export const Pagination: React.FC = () => {
  const page = useAppSelector((state) => state.textBook.page);
  const group = useAppSelector((state) => state.textBook.group);
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);

  const dispatch = useAppDispatch();

  function changePage(num: number) {
    dispatch(setPage(num));
    dispatch(getCard());
  }

  const increment = (event: MouseEvent<HTMLDivElement>) => {
    if (page !== 29) {
      if (page === pageButtons[pageButtons.length - 1]) {
        const arr = pageButtons.map((el) => el + 1);
        dispatch(setPageButtons(arr));
        changePage(page + 1);
      } else {
        changePage(page + 1);
      }
    }
  };
  const decrement = (event: MouseEvent<HTMLDivElement>) => {
    if (page !== 0) {
      if (page === pageButtons[0]) {
        const arr = pageButtons.map((el) => el - 1);
        dispatch(setPageButtons(arr));
        changePage(page - 1);
      } else {
        changePage(page - 1);
      }
    }
  };

  return (
    <div className={style.container}>
      <div
        className={style.btn_incr_decr}
        onClick={decrement}
      >
        <LeftIcon stroke={color[group]} />
      </div>
      <PageButtons />
      <div
        className={style.btn_incr_decr}
        onClick={increment}
      >
        <RightIcon stroke={color[group]} />
      </div>
    </div>
  );
};
