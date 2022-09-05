import React, { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { isUserLogIn } from '../../../utils/isUserLogIn';
import { Titlehallenge } from '../../TitleGames/Titlehallenge';

import style from './style.module.css';

interface IAudioQuickStartProps {
  isEasy: boolean;
}

export const AudioQuickStart = ({ isEasy }: IAudioQuickStartProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [startLoading, setStartLoading] = useState(false);

  const isLoad = useAppSelector((state) => state.textBook.loadStatus);

  const [isSelectDropDown, setsSelectDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

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
    <button
      type="button"
      // onClick={() => setValueLocalStorage('currentPage', location.pathname)}
      className={`${style.link} ${isEasy ? style.easy : ''}`}
    >
      <Titlehallenge text="Audio Challenge" icon="audio" />
    </button>
  );
};
