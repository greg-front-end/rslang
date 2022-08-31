import React from 'react';

import AudioBg from '../../assets/svg/games/audio-challenge-bg.svg';
import AudioIcon from '../../assets/svg/games/audio-chanllenge.svg';
import SprintIcon from '../../assets/svg/games/sprint.svg';
import SprintBg from '../../assets/svg/games/sprint-bg.svg';
import { GameCard } from '../../components/GameCard/GameCard';

const style = {
  paddingTop: '100px',
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  gap: '20px',
};

export const Games = () => (
  <div style={style}>
    <h1>Games</h1>
    <GameCard
      bgImg={SprintBg}
      img={SprintIcon}
      title="Sprint"
      path="/games/sprint"
    />
    <GameCard
      bgImg={AudioBg}
      img={AudioIcon}
      title="Audio Call"
      path="/games/audiocall"
    />
  </div>
);
