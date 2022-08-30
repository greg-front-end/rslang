import React from 'react';

import { ReactComponent as SprintIcon } from '../../assets/svg/sprint_icon.svg';

import { AudioCall } from './AudioCall';
import { Sprint } from './Sprint';

import style from './QuickStartGames.module.css';

export const QuickStartGames: React.FC = () => (
  <div className={style.wrapper}>
    <h3 className={style.title}>Quick start games</h3>
    <AudioCall />
    <Sprint />
  </div>
);
