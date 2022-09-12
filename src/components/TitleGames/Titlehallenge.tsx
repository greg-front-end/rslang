import React, { FC } from 'react';

import { ReactComponent as AudioIcon } from '../../assets/svg/games/audio-chanllenge.svg';
import { ReactComponent as SprintIcon } from '../../assets/svg/games/sprint.svg';

import style from './style.module.css';

type WordsLearnedProps = {
  icon: 'audio' | 'sprint',
  text: 'Audio Challenge' | 'Sprint'
}

export const Titlehallenge: FC<WordsLearnedProps> = ({ icon, text }) => (
  <div className={style.title_wrapper}>
    {icon === 'audio' ? <AudioIcon /> : <SprintIcon />}
    <h4 className={style.title}>{text}</h4>
  </div>
);
