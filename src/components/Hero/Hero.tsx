import React from 'react';
import { Link } from 'react-router-dom';

import HeroImg from '../../assets/img/hero/Hero-image.png';
import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg';

import style from './style.module.css';

export const Hero = () => (
  <div className={style.hero} id={style.hero}>
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.hero_content}>
          <h1 className={style.title}>
            Learn
            {' '}
            <span className={style.title_span}>English</span>
            {' '}
            easy and fast
          </h1>
          <span className={style.subtitle}>Raise your level of English with us</span>
          <Link to="register" className={style.hero_btn}>
            Start learn now
            {' '}
            <ArrowLeft className={style.hero_btn_icon} />
          </Link>
        </div>
        <div className={style.hero_img_wrapper}>
          <img src={HeroImg} alt="Girl learn english" />
        </div>
      </div>
    </div>
  </div>
);
