import React, { useEffect, useMemo, useState } from 'react';

import { changeCurrentWord } from '../../../features/audioChallengeSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { changeWord } from '../utils/changeWord';

import { Counter } from './Counter/Counter';
import { GameBtns } from './GameBtns/GameBtns';
import { WordItems } from './WordItems/WordItems';

import styles from './GameBody.module.css';

export const GameBody = () => {
  console.log('GameBody rerender');

  return (
    <div className={styles.wrapper}>
      <Counter />
      <WordItems />
      <GameBtns />
    </div>
  );
};
