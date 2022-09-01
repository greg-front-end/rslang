import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCard } from '../../api/getCard';
import { resetLoad, setGroup, setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getRandomNum } from '../AudioGame/utils/getRandomNum';

import styles from './GameCard.module.css';

interface IGameCardProps {
  bgImg: string;
  img: string;
  title: string;
  path: string;
}

export const GameCard = ({
  bgImg, img, title, path,
}: IGameCardProps) => {
  const option = useRef(document.createElement('select'));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [startLoading, setStartLoading] = useState(false);
  const isLoad = useAppSelector((state) => state.textBook.isLoad);

  const redirect = () => {
    dispatch(setGroup(+option.current.value));
    dispatch(setPage(getRandomNum(30)));
    setStartLoading(true);
  };

  useEffect(() => {
    if (startLoading) {
      dispatch(getCard());
    }
  }, [startLoading]);

  useEffect(() => {
    if (startLoading) {
      dispatch(resetLoad());
      setStartLoading(false);
      navigate(path);
    }
  }, [isLoad]);

  return (
    <div className={`frame ${styles.wrapper}`}>
      <img src={bgImg} alt={title} />
      <div className={styles.controls_wrapper}>
        <div className={styles.title_wrapper}>
          <img src={img} alt="icon" className={styles.title_img} />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <span className={styles.lvl}>Level</span>
        <select ref={option} name="level" id={title}>
          <option value="0">A1</option>
          <option value="1">A2</option>
          <option value="2">B1</option>
          <option value="3">B2</option>
          <option value="4">C1</option>
          <option value="5">C2</option>
        </select>
        <button
          type="button"
          className={`btn ${styles.btn__play}`}
          onClick={redirect}
        >
          Play
        </button>
      </div>
    </div>
  );
};
