import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useAppSelector } from '../../hooks/useAppSelector';

import { PageButton } from './PageButton';

import style from './Pagination.module.css';

export const PageButtons: React.FC = () => {
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);

  return (
    <div className={style.pageButtonsContainer}>
      {pageButtons.map((el, index) => (
        <PageButton key={nanoid()} el={el} index={index} />
      ))}
    </div>

  );
};
