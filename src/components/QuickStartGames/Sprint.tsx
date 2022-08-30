import React, { ReactComponentElement } from 'react';

import { ReactComponent as SprintIcon } from '../../assets/svg/sprint_icon.svg';

import style from './QuickStartGames.module.css';

export const Sprint: React.FC = () => {
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
        <span><SprintIcon /></span>
        <div className={style.boundary} />
        <span>Sprint</span>
      </button>
    </div>
  );
};
