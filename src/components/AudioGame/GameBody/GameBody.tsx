import React, { useMemo, useState } from 'react';

import { Counter } from './Counter/Counter';
import { GameBtns } from './GameBtns/GameBtns';
import { WordItems } from './WordItems/WordItems';

import styles from './GameBody.module.css';

export const GameBody = () => (
  <div className={styles.wrapper}>
    <Counter />
    <WordItems />
    <GameBtns />
  </div>
);
