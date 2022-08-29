import React, { useState } from 'react';

import { getCard } from '../../api/getCard';
import { setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { levels } from '../LevelButtons/LevelButtons';

import style from './Pagination.module.css';

export const PageButtons: React.FC = () => {
  const page = useAppSelector((state) => state.textBook.page);
  const group = useAppSelector((state) => state.textBook.group);
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);

  const dispatch = useAppDispatch();
  function changePage(num: number) {
    dispatch(setPage(num));
    dispatch(getCard());
  }
  return (
    <div className={style.pageButtonsContainer}>
      {pageButtons.map((el, index) => (
        <button
          onClick={() => changePage(el)}
          type="button"
          className={page === el ? `btn ${style.active} ${style.btn_pagination} ${levels[group].level}` : `btn ${style.btn_pagination} ${levels[group].level}`}
        >
          {index === pageButtons.length - 2 ? '...' : el + 1}
        </button>
      ))}
    </div>

  );
};
