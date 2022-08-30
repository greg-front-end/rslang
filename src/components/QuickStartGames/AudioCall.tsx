import React, { ReactComponentElement } from 'react';

import { ReactComponent as AudioCallIcon } from '../../assets/svg/audio_call_icon.svg';

import style from './QuickStartGames.module.css';

export const AudioCall: React.FC = () => {
  function link() {
    console.log('link');
  }
  return (
    <div>
      <button
        onClick={() => link()}
        className={`${style.btn}`}
        type="button"
      >
        <span><AudioCallIcon /></span>
        <div className={style.boundary} />
        <span>Audio Call</span>
      </button>
    </div>
  );
};
