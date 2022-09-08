import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteUser } from '../../api/deleteUser';
import { loadUser } from '../../api/loadUser';
import Valve from '../../assets/img/settings/valve.png';
import Img from '../../assets/svg/settings/img.svg';
import valv1 from '../../assets/svg/settings/valve.svg';
import valv2 from '../../assets/svg/settings/valve_2.svg';
import valv3 from '../../assets/svg/settings/valve_3.svg';
import valv4 from '../../assets/svg/settings/valve_4.svg';
import { AvatarSettings } from '../../components/settings/AvatarSettings/AvatarSettings';
import { SettingsInputs } from '../../components/settings/SettingsInputs/SettingsInputs';
import { logOutUser } from '../../features/authSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

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
      <h2 className={`title ${style.title}`}>Settings</h2>
      <div className={style.settings_wrapper}>
        <img src={Valve} alt="valve" className={style.valve} />
        <img src={valv1} alt="" className={`${style.img_a} ${style.v1}`} />
        <img src={valv2} alt="" className={`${style.img_a} ${style.v2}`} />
        <img src={valv3} alt="" className={`${style.img_a} ${style.v3}`} />
        <img src={valv4} alt="" className={`${style.img_a} ${style.v4}`} />
        <div className={`frame ${style.frame}`}>
          <AvatarSettings />
        </div>
        <div className={`frame ${style.frame}`}>
          <SettingsInputs />
          <button
            type="button"
            className={`form_btn ${style.del_btn}`}
            onClick={userDelete}
          >
            Delete user
          </button>
        </div>
      </div>
    </div>
  );
};
