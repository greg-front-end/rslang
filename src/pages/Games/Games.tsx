import React from 'react';
import { useLocation } from 'react-router-dom';

import AudioBg from '../../assets/svg/games/audio-challenge-bg.svg';
import AudioIcon from '../../assets/svg/games/audio-chanllenge.svg';
import SprintIcon from '../../assets/svg/games/sprint.svg';
import SprintBg from '../../assets/svg/games/sprint-bg.svg';
import { GameCard } from '../../components/GameCard/GameCard';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { isUserLogIn } from '../../utils/isUserLogIn';
import { setValueLocalStorage } from '../../utils/setValueLocalStorage';

import styleLogIn from '../../style/log_in.module.css';
import style from './style.module.css';

export const Games = () => {
  const location = useLocation();
  setValueLocalStorage('currentPage', location.pathname);
  return (
    <div style={style} className={isUserLogIn() ? style.games_login : style.games}>
      <div className={isUserLogIn() ? '' : 'container'}>
        <div className={isUserLogIn() ? style.wrapper_login : style.wrapper} />
        <div className={isUserLogIn() ? styleLogIn.team_header_wrapper : styleLogIn.header_wrapper}>
          <div className={isUserLogIn() ? styleLogIn.title_wrapper : ''}>
            <h2 className={isUserLogIn() ? `${style.title_login} title` : `${style.title} title`}>Mini games</h2>
          </div>
          {isUserLogIn() && (
            <div className={styleLogIn.user_info_wrapper}>
              <UserInfo />
            </div>
          )}
        </div>
        <div className={isUserLogIn() ? style.games_cards_login : style.games_cards}>
          <div className={isUserLogIn() ? `${style.games_card_login}` : style.game_card}>
            <GameCard
              bgImg={SprintBg}
              img={SprintIcon}
              title="Sprint"
              path="/games/sprint"
            />
          </div>
          <div className={isUserLogIn() ? style.games_card_login : style.games_card}>
            <GameCard
              bgImg={AudioBg}
              img={AudioIcon}
              title="Audio Call"
              path="/games/audiocall"
            />
          </div>
        </div>
      </div>
      {isUserLogIn() && (
        <div className={style.games_bg_decor} />
      )}
    </div>
  );
};
