import React from 'react';

import styles from './LoggedBtns.module.css';

export const LoggedBtns = () => (
  <div className={styles.wrapper}>
    <button
      type="button"
    >
      Difficult
    </button>
    <button
      type="button"
    >
      Learned
    </button>
  </div>
);
