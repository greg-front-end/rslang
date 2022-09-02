import React from 'react';

import { getHardWords } from '../../api/getHardWords';
import { ReactComponent as HardWordsIcon } from '../../assets/svg/hard_words.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import style from './LevelButtons.module.css';

export const HardWords: React.FC = () => {
  const dispatch = useAppDispatch();
  function handle() {
    console.log('handle');

    dispatch(getHardWords());
  }

  return (
    <div>
      <button
        onClick={() => handle()}
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
