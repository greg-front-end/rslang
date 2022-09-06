import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useAppSelector } from '../../hooks/useAppSelector';
import { isUserLogIn } from '../../utils/isUserLogIn';
import { QuickStartGame } from '../QuickStartGame/QuickStartGame';

import { HardWords } from './HardWords';
import { Level, LevelButton } from './LevelButton';

import style from './LevelButtons.module.css';

export const levels: Level[] = [
  { level: 'A1', name: 'Elementary', group: 0 },
  { level: 'A2', name: 'Pre-Intermediate', group: 1 },
  { level: 'B1', name: 'Intermediate', group: 2 },
  { level: 'B2', name: 'Upper-Intermediate', group: 3 },
  { level: 'C1', name: 'Advanced', group: 4 },
  { level: 'C2', name: 'Proficient', group: 5 },
];
interface ILevelButtonsProps {
  closeLvlSettingMenu: () => void
  isActiveLvlSettingMenu: boolean
}

const asideStylesLogIn = () => (isUserLogIn() ? `${style.aside_wrapper}` : `${style.aside_wrapper} ${style.aside_wrapper_logput}`);

export const LevelButtons: React.FC<ILevelButtonsProps> = (
  {
    closeLvlSettingMenu,
    isActiveLvlSettingMenu,
  },
) => {
  const toggleHardWords = useAppSelector((state) => state.textBook.switchHardWords);
  return (
    <div className={style.wrapper}>
      <div className={isActiveLvlSettingMenu ? `${asideStylesLogIn()} ${style.aside_wrapper_active}` : asideStylesLogIn()}>
        <h2 className={style.title}>Level</h2>
        {levels.map((el) => (
          <LevelButton
            key={nanoid()}
            level={el.level}
            name={el.name}
            group={el.group}
            closeLvlSettingMenu={closeLvlSettingMenu}
          />
        ))}
        {isUserLogIn() && <HardWords closeLvlSettingMenu={closeLvlSettingMenu} />}
        <div className={style.wrapper_QuickStartGame}>
          {!toggleHardWords && <QuickStartGame closeLvlSettingMenu={closeLvlSettingMenu} />}
        </div>
      </div>
    </div>
  );
};
