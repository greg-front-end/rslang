import React from 'react';

import { ReactComponent as HardWordsIcon } from '../../assets/svg/hard_words.svg';

import style from './LevelButtons.module.css';

export const HardWords: React.FC = () => {
  function change() {
    console.log('Hard words');
  }
  return (
    <div>
      <button
        onClick={() => change()}
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
