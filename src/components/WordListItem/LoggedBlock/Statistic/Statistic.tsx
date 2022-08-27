import React from 'react';

import styles from './Statistic.module.css';

export const Statistic = () => (
  <div className={styles.wrapper}>
    <h6 className={styles.title}>Mini games statistics:</h6>
    <span className={`${styles.right} ${styles.item}`}>Right</span>
    <span className={`${styles.wrong} ${styles.item}`}>Wrong</span>
  </div>
);
