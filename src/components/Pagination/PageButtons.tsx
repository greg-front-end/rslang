import React, { useState } from 'react';

import { getCard } from '../../api/getCard';
import { setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import style from './Pagination.module.css';

export const PageButtons: React.FC = () => {
  const page = useAppSelector((state) => state.textBook.page);
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);

  const dispatch = useAppDispatch();
  function changePage(num: number) {
    dispatch(setPage(num));
    dispatch(getCard());
  }
  return (
    <div className={style.pageButtonsContainer}>
      {pageButtons.map((el) => (
        <button
          onClick={() => changePage(el)}
          type="button"
          className={page === el ? `${style.btn} ${style.active}` : style.btn}
        >
          {el + 1}
        </button>
      ))}
    </div>

  );
};
