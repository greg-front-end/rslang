import React, { FC, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { setValueLocalStorage } from '../../utils/setValueLocalStorage';
import { TextBookCont } from '../TextBookContext/TextBookContext';
import { Titlehallenge } from '../TitleGames/Titlehallenge';

import { AudioQuickStart } from './AudioQuickStart/AudioQuickStart';

import style from './style.module.css';

interface IQuickStartGame {
  // eslint-disable-next-line react/require-default-props
  closeLvlSettingMenu?: () => void
}
export const QuickStartGame: FC<IQuickStartGame> = ({ closeLvlSettingMenu }) => {
  const { isEasy } = useContext(TextBookCont);
  const location = useLocation();
  setValueLocalStorage('currentPage', location.pathname);

  return (

    <div className={style.quick_start_game}>
      <h4 className={style.title}>Quick start games</h4>
      {/* <NavLink
        to="/games/audiocall"
        onClick={() => setValueLocalStorage('currentPage', location.pathname)}
        className={`${style.link} ${isEasy ? style.easy : ''}`}
      >
        <Titlehallenge text="Audio Challenge" icon="audio" />
      </NavLink> */}
      <AudioQuickStart isEasy={isEasy} />
      <NavLink
        to="/games/sprint"
        onClick={() => {
          setValueLocalStorage('currentPage', location.pathname);
          closeLvlSettingMenu!();
        }}
        className={`${style.link} ${isEasy ? style.easy : ''}`}
      >
        <Titlehallenge text="Sprint" icon="sprint" />
      </NavLink>
    </div>
  );
};
