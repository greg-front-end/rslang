import React, { FC } from 'react';

import UserImg from '../../assets/img/our_team/lilith1.png';

import style from './style.module.css';

export const UserInfo: FC = () => (
  <div className={style.user}>
    <div className={style.user_img}>
      <img src={UserImg} alt="User" />
    </div>
    <span className={style.user_name}>Lilith</span>
    <span className={style.user_email}>lilith@gmail.com</span>
  </div>
);
