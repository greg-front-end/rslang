/* eslint-disable no-debugger */
import React, {
  FC, useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { getAgregatedCard } from '../../../api/getAggregatedCard';
import { getNoEasyWords } from '../../../api/getNoEasyWords';
import { setCardsArray, setPage } from '../../../features/textBookSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IWordsItem } from '../../../types/IWordsItem';
import { LoadStatus } from '../../../types/LoadStatus';
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
