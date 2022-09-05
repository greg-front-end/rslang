import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteUser } from '../../api/deleteUser';
import { loadUser } from '../../api/loadUser';
import { AvatarSettings } from '../../components/AvatarSettings/AvatarSettings';
import { logOutUser } from '../../features/authSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import style from './style.module.css';

export const UserSettings = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.name);
  const mail = useAppSelector((state) => state.auth.email);

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
          <AvatarSettings />
          <div className={style.userInfo_wrapper}>
            <span>{name}</span>
            <span>{mail}</span>
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
