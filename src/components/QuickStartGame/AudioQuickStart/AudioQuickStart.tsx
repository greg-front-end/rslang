/* eslint-disable no-debugger */
import React, {
  useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Titlehallenge } from '../../TitleGames/Titlehallenge';

import style from './style.module.css';

interface IAudioQuickStartProps {
  isEasy: boolean;
}

export const AudioQuickStart = ({ isEasy }: IAudioQuickStartProps) => {
  const navigate = useNavigate();
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    if (startGame) {
      navigate('/games/audiocall');
      setStartGame(false);
    }
  }, [startGame]);

  return (
    <button
      type="button"
      onClick={() => setStartGame(true)}
      className={`${style.link} ${isEasy ? style.easy : ''}`}
    >
      <Titlehallenge text="Audio Challenge" icon="audio" />
    </button>
  );
};
