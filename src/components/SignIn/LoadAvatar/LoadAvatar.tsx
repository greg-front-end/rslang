import React, { useEffect, useRef, useState } from 'react';
import Avatar from 'react-avatar-edit';
import { useDispatch } from 'react-redux';

import Plug from '../../../assets/svg/avatar-plug.svg';

import style from './style.module.css';

interface ILoadAvatarProps {
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}

export const LoadAvatar = ({ img, setImg }: ILoadAvatarProps) => {
  const [isImg, setIsImg] = useState(false);
  const [showUpload, setShowUpload] = useState(style.hide);
  const imgCooser = useRef(null);

  const crop = (path: string) => {
    setImg(path);
    setIsImg(true);
  };

  const show = () => {
    if (showUpload) {
      setShowUpload('');
    } else {
      setShowUpload(style.hide);
    }
  };

  const close = () => setShowUpload(style.hide);

  return (
    <div className={style.wrapper}>
      <div className={`${style.upload_avatar}`}>
        <div className={`${style.loader_wrapper} ${showUpload}`}>
          <Avatar
            width={200}
            height={200}
            onClose={close}
            onCrop={crop}
            ref={imgCooser}
          />
        </div>
        <div className={`${style.img__wrapper}`}>
          <img src={isImg ? img : Plug} alt="avatar" className={isImg ? style.img : style.plug} />
        </div>
      </div>
      <button
        type="button"
        className={`form_btn ${style.btn}`}
        onClick={show}
      >
        Choose avatar
      </button>
    </div>
  );
};
