import React, { useContext } from 'react';

import {
  setDecrement, setIncrement, setPage, setPageButtons,
} from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setValueLocalStorage } from '../../utils/setValueLocalStorage';
import { levels } from '../LevelButtons/LevelButtons';
import { TextBookCont } from '../TextBookContext/TextBookContext';

import style from './Pagination.module.css';

type PageButton = {
  el: number,
  index: number
}

export const PageButton: React.FC<PageButton> = ({ el, index }) => {
  const page = useAppSelector((state) => state.textBook.page);
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);
  const increment = useAppSelector((state) => state.textBook.increment);
  const decrement = useAppSelector((state) => state.textBook.decrement);
  const { isEasy } = useContext(TextBookCont);
  const group = useAppSelector((state) => state.textBook.group);
  let numPage: number | string = el + 1;

  if ((index === 0 && page >= 5)) numPage = 1;

  if ((index === 1)
    && ((page > 4)
      || ((page === 3 || page === 4) && (pageButtons[1] === 2 || pageButtons[1] === 3))
      || ((decrement) && page <= 5 && page > 2)
    )) numPage = '...';

  if (
    (index === 5) && (
      (page <= 24)
      || ((page === 25 || page === 26) && pageButtons[5] === 27)
      || (increment && page < 27 && page >= 25)
    )) numPage = '...';

  if (index === 6) numPage = 30;

  const dispatch = useAppDispatch();
  function changePage(num: number | string) {
    if (typeof num === 'number') {
      if (num === 29) {
        dispatch(setPageButtons([0, 24, 25, 26, 27, 28, 29]));
      }

      if (num === 0) {
        dispatch(setPageButtons([0, 1, 2, 3, 4, 5, 29]));
      }
      setValueLocalStorage('page', num);
      dispatch(setPage(num));
      dispatch(setDecrement(false));
      dispatch(setIncrement(false));
    }
  }

  return (
    <div>
      <button
        onClick={() => (typeof numPage === 'number' ? changePage(numPage - 1) : changePage('...'))}
        type="button"
        className={page === el
          ? `${isEasy ? '' : 'btn'} ${style.active} ${isEasy ? style.easy : ''} ${style.btn_pagination} ${isEasy ? '' : levels[group].level}`
          : `btn ${style.btn_pagination} ${levels[group].level}`}
      >
        {numPage}
      </button>
    </div>
  );
};
