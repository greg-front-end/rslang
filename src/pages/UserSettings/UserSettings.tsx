import React from 'react';
import { useSelector } from 'react-redux';

// import Plug from '../../assets/svg/avatar-plug.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import style from './style.module.css';

export const UserSettings = () => {
  const isImg = !!localStorage.getItem('avatar');
  const avatar = JSON.parse(localStorage.getItem('avatar') as string);

  const dispatch = useAppDispatch();
  return (
    <div className={style.wrapper}>
      <h2 className="title">Settings</h2>
      <div className={style.wrapper_bottom}>
        <div className={`frame ${style.card}`}>
          <div className={style.avatar_wrapper}>
            <img src={isImg ? avatar : ''} alt="avatar" className={style.avatar} />
          </div>
          <input
            type="file"
            name="myImage"
            accept=".jpg,.jpeg,.png,.gif,.svg"
          />
        </div>
      </div>
    </div>
  );
};
