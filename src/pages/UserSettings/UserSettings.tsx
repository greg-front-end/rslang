import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteUser } from '../../api/deleteUser';
import { loadUser } from '../../api/loadUser';
import Img from '../../assets/svg/settings/img.svg';
import { AvatarSettings } from '../../components/settings/AvatarSettings/AvatarSettings';
import { SettingsInputs } from '../../components/settings/SettingsInputs/SettingsInputs';
import { logOutUser } from '../../features/authSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import style from './style.module.css';

export const UserSettings = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const userDelete = () => {
    dispatch(deleteUser());
    dispatch(logOutUser());
    nav('/');
  };

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div className={style.wrapper}>
      <h2 className="title">Settings</h2>
      <div className={style.wrapper_bottom}>
        <div className={`frame ${style.card}`}>
          <img src={Img} alt="bgImg" className={style.pic} />
          <AvatarSettings />
          <div className={style.userInfo_wrapper}>
            <SettingsInputs />
            <button
              type="button"
              className={`form_btn ${style.btn_delete}`}
              onClick={userDelete}
            >
              Delete user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
