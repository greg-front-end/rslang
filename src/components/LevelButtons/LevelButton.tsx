import React from 'react';

import { clearHardWords, setGroup, toggleHardWords } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setValueLocalStorage } from '../../utils/setValueLocalStorage';

import style from './LevelButtons.module.css';

export type Level = {
  level: string,
  name: string,
  group: number,
  // eslint-disable-next-line react/require-default-props
  closeLvlSettingMenu?: () => void;
}

export const LevelButton: React.FC<Level> = ({
  level, name, group, closeLvlSettingMenu,
}) => {
  const dispatch = useAppDispatch();
  const groupNum = useAppSelector((state) => state.textBook.group);
  function changeGroup(num: number) {
    if (num === groupNum) {
      return;
    }

    setValueLocalStorage('group', num);
    dispatch(setGroup(num));
    dispatch(toggleHardWords(false));
    dispatch(clearHardWords());
    dispatch(toggleHardWords(false));
  }

  return (
    <div>
      <button
        onClick={() => {
          changeGroup(group);
          closeLvlSettingMenu!();
        }}
        className={`${style.btn} ${level}`}
        type="button"
      >
        <span>{level}</span>
        <div className={style.boundary} />
        <span>{name}</span>
      </button>
    </div>
  );
};
