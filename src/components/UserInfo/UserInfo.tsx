import React, { FC, useEffect } from 'react';

import { loadUser } from '../../api/loadUser';
import UserImg from '../../assets/svg/avatar-plug.svg';
import { getAvatar } from '../../features/settingsSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import style from './style.module.css';

export const UserInfo: FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.name);
  const mail = useAppSelector((state) => state.auth.email);
  const avatar = useAppSelector((state) => state.settings.avatar);
  const img = avatar || UserImg;
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAvatar());
  }, []);
  return (
    <div className={style.user}>
      <div className={style.user_img}>
        <img src={img} alt="User" className={style.img} />
      </div>
      <span className={style.user_name}>{name}</span>
      <span className={style.user_email}>{mail}</span>
    </div>
  );
};
