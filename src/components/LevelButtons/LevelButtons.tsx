import React from 'react';

import { isUserLogIn } from '../../utils/isUserLogIn';

import { HardWords } from './HardWords';
import { Level, LevelButton } from './LevelButton';

import style from './LevelButtons.module.css';

export const levels: Level[] = [
  { level: 'A1', name: 'Elementary', group: 0 },
  { level: 'A2', name: 'Pre-Intermediate', group: 1 },
  { level: 'B1', name: 'Intermediate', group: 2 },
  { level: 'B2', name: 'Upper-Intermediate', group: 3 },
  { level: 'C1', name: 'Upper-Intermediate', group: 4 },
  { level: 'C2', name: 'Upper-Intermediate', group: 5 },
];

export const LevelButtons: React.FC = () => (
  <div className={style.wrapper}>
    <h2 className={style.title}>Level</h2>
    {levels.map((el) => <LevelButton level={el.level} name={el.name} group={el.group} />)}
    {isUserLogIn() && <HardWords />}
  </div>
);
