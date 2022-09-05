import React, {
  FC, useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { getNoEasyWords } from '../../../api/getNoEasyWords';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { LoadStatus } from '../../../types/LoadStatus';
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
  const noEasyWords = useAppSelector((state) => state.textBook.noEasyWords);
  console.log(noEasyWords);

  useEffect(() => {
    dispatch(getNoEasyWords(40));
  }, [startLoading]);

  useEffect(() => {
    if (startLoading && isLoad === LoadStatus.fulfilled) {
      navigate('/games/audiocall');
      setStartLoading(false);
    }
  }, [isLoad]);

  return (
    <button
      type="button"
      onClick={() => setStartLoading(true)}
      className={`${style.link} ${isEasy ? style.easy : ''}`}
    >
      <Titlehallenge text="Audio Challenge" icon="audio" />
    </button>
  );
};
