import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

import { PageButton } from './PageButton';

import style from './Pagination.module.css';

export const PageButtons: React.FC = () => {
  const pageButtons = useAppSelector((state) => state.textBook.pageButtons);

  return (
    <div className={style.pageButtonsContainer}>
      {pageButtons.map((el, index) => (
        <PageButton el={el} index={index} />
      ))}
    </div>

  );
};
