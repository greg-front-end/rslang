import React from 'react';

import { Statistic } from './Statistic/Statistic';

import styles from './LoggedBlock.module.css';

export const LoggedBlock = () => (
  <div className={styles.wrapper}>
    <Statistic />
    <div className={styles.btns__wrapper}>
      <button
        type="button"
        className={`btn ${styles.red}`}
      >
        Difficult
      </button>
      <button
        type="button"
        className={`btn ${styles.green}`}
      >
        Learned
      </button>
    </div>
  </div>
);
