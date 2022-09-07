/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { ReactComponent as ArrowDownIcon } from '../../assets/svg/arrow-left.svg';
import { setIsLoad } from '../../features/sprintSlice';
import { setGroup, setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getValueLocalStorage } from '../../utils/getValueLocalStorage';
import { isUserLogIn } from '../../utils/isUserLogIn';
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
  const isLogged = isUserLogIn();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [startLoading, setStartLoading] = useState(false);
  const isLoad = useAppSelector((state) => state.textBook.loadStatus);
  const [isSelectDropDown, setsSelectDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const colors = ['#875CFF', '#FF9B8C', '#B0E021', '#F2B233', '#64E3FF', '#00FFCE'];
  const options = [
    ['A1', 'Elementary'],
    ['A2', 'Pre-Intermediate'],
    ['B1', 'Intermediate'],
    ['B2', 'Upper-Intermediate'],
    ['C1', 'Advanced'],
    ['C2', 'Proficient'],
  ];

  const toggleSelectDropDown = () => setsSelectDropDown(!isSelectDropDown);

  const handleOption = (value: number) => () => {
    setSelectedOption(value);
    setsSelectDropDown(false);
  };
  const redirect = () => {
    dispatch(setGroup(selectedOption));
    dispatch(setPage(getRandomNum(30)));
    setStartLoading(true);
  };

  useEffect(() => {
    if (startLoading) {
      isLogged ? dispatch(getAgregatedCard()) : dispatch(getCard());
    }
  }, [startLoading]);

  useEffect(() => {
    if (startLoading && isLoad === 'fulfilled') {
      navigate(path);
      setStartLoading(false);
    }
  }, [isLoad]);

  return (
    <div className={isUserLogIn() ? styles.wrapper_login : `frame ${styles.wrapper}`}>
      <div className={isUserLogIn() ? styles.card_img_log_in : styles.card_img}>
        <img src={bgImg} alt={title} />
      </div>
      <div className={styles.controls_wrapper}>
        <div className={styles.title_wrapper}>
          <img src={img} alt="icon" className={styles.title_img} />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <span className={styles.lvl}>Level</span>
        <div className={styles.options_wrapper}>
          <div
            style={{ color: `${colors[selectedOption]}` }}
            className={
              isSelectDropDown ? `${styles.options} ${styles.options_active}` : styles.options
            }
            onClick={toggleSelectDropDown}
            tabIndex={-42}
            role="button"
          >
            <span className={styles.options_text}>
              <span className={styles.options_text_letter}>
                {options[selectedOption][0]}
              </span>
              <span>
                {options[selectedOption][1]}
              </span>
            </span>
            <ArrowDownIcon
              fill={colors[selectedOption]}
              stroke={colors[selectedOption]}
            />
          </div>
          <div className={styles.options_list_wrapper}>
            <ul
              className={styles.options_list}
              role="menu"
              aria-labelledby="dropdownMenu"
            >
              {
                options.map((opt, idx) => (
                  <li
                    role="presentation"
                    tabIndex={-1}
                    key={nanoid()}
                    onClick={handleOption(idx)}
                    className={styles.option}
                  >
                    <span className={`${styles.option_text} ${opt[0]}`}>
                      {`${opt[0]} ${opt[1]}`}
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
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
