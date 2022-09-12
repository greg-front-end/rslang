/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { LoadStatus } from '../../types/LoadStatus';

import spinnerImg from './spinner.gif';

import styles from './Spinner.module.css';

export const Spinner = () => {
  const isLoad = useAppSelector((state) => state.textBook.loadStatus) === LoadStatus.pending;
  return (
    isLoad
      ? (
        <div className={styles.spinner_wrapper}>
          <img src={spinnerImg} alt="Loading..." />
        </div>
      )
      : <span />
  );
};
