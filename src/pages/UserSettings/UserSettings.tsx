import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AvatarSettings } from '../../components/AvatarSettings/AvatarSettings';
// import Plug from '../../assets/svg/avatar-plug.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import style from './style.module.css';

export const UserSettings = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.wrapper}>
      <h2 className="title">Settings</h2>
      <div className={style.wrapper_bottom}>
        <div className={`frame ${style.card}`}>
          <AvatarSettings />
        </div>
      </div>
    </div>
  );
};
