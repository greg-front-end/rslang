import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';

import Plug from '../../../assets/svg/avatar-plug.svg';
import { getAvatar, setAvatar } from '../../../features/settingsSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

import style from './style.module.css';

export const AvatarSettings = () => {
  const dispatch = useAppDispatch();
  dispatch(getAvatar());
  const avatar = useAppSelector((state) => state.settings.avatar) || Plug;
  const [showUpload, setShowUpload] = useState(true);

  const crop = (path: string) => {
    dispatch(setAvatar(path));
  };

  const show = () => {
    if (showUpload) {
      setShowUpload(false);
    } else {
      setShowUpload(true);
    }
  };

  const close = () => {
    setShowUpload(true);
  };

  return (
    <div className={style.avatar_section}>
      <div className={`${style.upload_avatar}`}>
        <div className={`${style.loader_wrapper} ${showUpload && style.hide}`}>
          <Avatar
            width={200}
            height={200}
            onClose={close}
            onCrop={crop}
            imageWidth={400}
          />
        </div>
        <div className={`${style.avatar_wrapper}`}>
          <img src={avatar} alt="avatar" className={avatar ? style.avatar : style.plug} />
        </div>
      </div>
      <button
        type="button"
        className={`btn ${style.btn}`}
        onClick={show}
      >
        Change
      </button>
    </div>
  );
};
