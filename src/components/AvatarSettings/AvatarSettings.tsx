import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';

import style from './style.module.css';

const setToLclstorage = (img: string) => localStorage.setItem('avatar', JSON.stringify(img));
const getFromLclstorage = () => (localStorage.getItem('avatar')
  ? JSON.parse(localStorage.getItem('avatar') as string)
  : '');

export const AvatarSettings = () => {
  const isImg = getFromLclstorage();
  const [avatar, setAvatar] = useState(isImg ? getFromLclstorage() : '');
  const [showUpload, setShowUpload] = useState(style.hide);
  JSON.parse(localStorage.getItem('avatar') as string);

  const crop = (img: string) => {
    setAvatar(img);
    setToLclstorage(avatar);
  };

  const show = () => {
    if (showUpload) {
      setShowUpload('');
      setToLclstorage(avatar);
    } else {
      setShowUpload(style.hide);
    }
  };

  const close = () => setShowUpload(style.hide);

  return (
    <div className={style.avatar_section}>
      <div className={`${style.upload_avatar}`}>
        <div className={`${style.loader_wrapper} ${showUpload}`}>
          <Avatar
            width={200}
            height={200}
            onClose={close}
            onCrop={crop}
          />
        </div>
        <div className={`${style.avatar_wrapper}`}>
          <img src={isImg ? avatar : ''} alt="avatar" className={style.avatar} />
        </div>
      </div>
      <button
        type="button"
        className={`btn ${style.btn}`}
        onClick={show}
      >
        Choose
      </button>
    </div>
  );
};
