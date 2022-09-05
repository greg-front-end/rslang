import React from 'react';

import AudioBg from '../../assets/svg/games/audio-challenge-bg.svg';
import AudioIcon from '../../assets/svg/games/audio-chanllenge.svg';
import SprintIcon from '../../assets/svg/games/sprint.svg';
import SprintBg from '../../assets/svg/games/sprint-bg.svg';
import { GameCard } from '../../components/GameCard/GameCard';
import { isUserLogIn } from '../../utils/isUserLogIn';

import style from './style.module.css';

export const Games = () => (
  <div style={style} className={isUserLogIn() ? style.games_login : style.games}>
    <div className={isUserLogIn() ? '' : 'container'}>
      <div className={isUserLogIn() ? style.wrapper_login : style.wrapper} />
      <h1 className={isUserLogIn() ? `${style.title_login} title` : `${style.title} title`}>Mini games</h1>
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
