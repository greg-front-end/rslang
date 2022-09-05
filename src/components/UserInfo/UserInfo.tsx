import React, { FC } from 'react';

import UserImg from '../../assets/img/our_team/lilith1.png';
import { getAvatarKey } from '../SignIn/LoadAvatar/saveAvatar';

import style from './style.module.css';

const img = localStorage.getItem('avatar')
  ? JSON.parse(localStorage.getItem('avatar') as string)
  : UserImg;

export const UserInfo: FC = () => (
  <div className={style.user}>
    <div className={style.user_img}>
      <img src={img} alt="User" />
    </div>
    <span className={style.user_name}>Martin Iden</span>
    <span className={style.user_email}>Martin@gmail.com</span>
  </div>
);
