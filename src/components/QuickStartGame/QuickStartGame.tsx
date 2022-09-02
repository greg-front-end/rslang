import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Titlehallenge } from '../TitleGames/Titlehallenge';

import style from './style.module.css';

export const QuickStartGame: FC = () => (
  <div className={style.quick_start_game}>
    <h4 className={style.title}>Quick start games</h4>
    <NavLink to="/games/audiocall" className={style.link}>
      <Titlehallenge text="Audio Challenge" icon="audio" />
    </NavLink>
    <NavLink to="/games/sprint" className={style.link}>
      <Titlehallenge text="Sprint" icon="sprint" />
    </NavLink>
  </div>
);
