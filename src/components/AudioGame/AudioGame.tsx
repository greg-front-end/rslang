import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setInitState } from '../../features/audioChallengeSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { GameBody } from './GameBody/GameBody';
import { ResultsTable } from './ResultsTable/ResultsTable';
import { setStartGameState } from './utils/setStartGameState';

import styles from './AudioGame.module.css';

export const AudioGame = () => {
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const finish = useAppSelector((state) => state.audioChallenge.finish);
  useEffect(() => {
    if (cards.length) {
      dispatch(setInitState(setStartGameState(cards)));
      setIsLoad(true);
    } else {
      navigate('/games');
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {finish
        ? <ResultsTable />
        : isLoad && <GameBody />}
    </div>
  );
};
