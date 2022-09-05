import React, { FC, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { setValueLocalStorage } from '../../utils/setValueLocalStorage';
import { TextBookCont } from '../TextBookContext/TextBookContext';
import { Titlehallenge } from '../TitleGames/Titlehallenge';

import style from './style.module.css';

export const QuickStartGame: FC = () => {
  const { isEasy } = useContext(TextBookCont);
  const location = useLocation();
  setValueLocalStorage('currentPage', location.pathname);

  return (

    <div className={style.quick_start_game}>
      <h4 className={style.title}>Quick start games</h4>
      <NavLink
        to="/games/audiocall"
        onClick={() => setValueLocalStorage('currentPage', location.pathname)}
        className={`${style.link} ${isEasy ? style.easy : ''}`}
      >
        <Titlehallenge text="Audio Challenge" icon="audio" />
      </NavLink>
      <NavLink
        to="/games/sprint"
        onClick={() => setValueLocalStorage('currentPage', location.pathname)}
        className={`${style.link} ${isEasy ? style.easy : ''}`}
      >
        <Titlehallenge text="Sprint" icon="sprint" />
      </NavLink>
    </div>
  );
};
