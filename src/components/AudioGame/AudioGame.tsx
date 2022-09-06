import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setInitState } from '../../features/audioChallengeSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { isUserLogIn } from '../../utils/isUserLogIn';

import { GameBody } from './GameBody/GameBody';
import { Results } from './Results/Results';
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
    <div className={isUserLogIn() ? `${styles.challenge} ${styles.challenge_login}` : `${styles.challenge} ${styles.challenge_logout}`}>
      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={isUserLogIn() ? `${styles.title} title` : `${styles.title} ${styles.title_logout} title`}>Audio challenge</h2>
          {finish
            ? (<Results />)
            : isLoad && <GameBody />}
        </div>
      </div>
      <div className={styles.audio_bg} />
      <span className={styles.pause_decor} />
      <span className={styles.play_decor} />
    </div>
  );
};
