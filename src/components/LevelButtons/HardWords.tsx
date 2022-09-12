import React from 'react';

import { getHardWords } from '../../api/getHardWords';
import { ReactComponent as HardWordsIcon } from '../../assets/svg/hard_words.svg';
import { toggleHardWords } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import style from './LevelButtons.module.css';

interface IHardWordsProps {
  closeLvlSettingMenu: () => void
}
export const HardWords: React.FC<IHardWordsProps> = ({ closeLvlSettingMenu }) => {
  const dispatch = useAppDispatch();
  function handle() {
    dispatch(getHardWords());
    dispatch(toggleHardWords(true));
  }

  return (
    <div>
      <button
        onClick={() => {
          handle();
          closeLvlSettingMenu();
        }}
        className={`${style.btn} hard_group`}
        type="button"
      >
        <span><HardWordsIcon /></span>
        <div className={style.boundary} />
        <span>Hard words</span>
      </button>
    </div>
  );
};
