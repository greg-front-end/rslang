import React, { MouseEvent } from 'react';

import { getCard } from '../../api/getCard';
import {
  setDecrement, setIncrement, setPage, setPageButtons,
} from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

function ChangePage(num: number) {
  const dispatch = useAppDispatch();
  dispatch(setPage(num));
  dispatch(getCard());
}

export const Increment = (event: MouseEvent<HTMLDivElement>) => {
  const page = useAppSelector((state) => state.textBook.page);
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);
  const dispatch = useAppDispatch();

  if (page !== 29) {
    if (page === pageButtons[pageButtons.length - 3]
      && pageButtons[pageButtons.length - 2] !== 28) {
      const arr = pageButtons.map((el) => el + 1);
      arr[0] = 0;
      arr[arr.length - 1] = 29;
      dispatch(setPageButtons(arr));
      ChangePage(page + 1);
      dispatch(setIncrement(true));
    } else {
      ChangePage(page + 1);
      dispatch(setIncrement(true));
      dispatch(setDecrement(false));
    }
  }
};

export const Decrement = (event: MouseEvent<HTMLDivElement>) => {
  const page = useAppSelector((state) => state.textBook.page);
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);
  const dispatch = useAppDispatch();
  if (page !== 0) {
    if (page === pageButtons[2] && pageButtons[1] !== 1) {
      const arr = pageButtons.map((el) => el - 1);
      arr[0] = 0;
      arr[arr.length - 1] = 29;
      dispatch(setPageButtons(arr));
      ChangePage(page - 1);
      dispatch(setDecrement(true));
    } else {
      ChangePage(page - 1);
      dispatch(setDecrement(true));
      dispatch(setIncrement(false));
    }
  }
};
