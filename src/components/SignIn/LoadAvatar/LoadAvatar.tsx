import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Plug from '../../../assets/svg/avatar-plug.svg';

import style from './style.module.css';

interface ILoadAvatarProps {
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}

export const LoadAvatar = ({ img, setImg }: ILoadAvatarProps) => {
  const [isImg, setIsImg] = useState(false);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImg(fileReader.result as string);
    setIsImg(true);
  };

  const loadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      fileReader.readAsDataURL(file);
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.img__wrapper}>
        <img src={isImg ? img : Plug} alt="avatar" className={isImg ? style.img : style.plug} />
      </div>
      <label
        htmlFor="img-loader"
        className={`form_btn ${style.btn}`}
      >
        <span>Choose avatar</span>
        <input
          type="file"
          name="myImage"
          id="img-loader"
          className={style.input}
          onChange={loadHandler}
        />
      </label>
    </div>
  );
};
