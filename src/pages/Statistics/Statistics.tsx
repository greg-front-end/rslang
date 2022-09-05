import React, { useEffect, useState } from 'react';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getUserStatistic } from '../../api/getUserStatistic';
import { ReactComponent as CalendarIcon } from '../../assets/svg/statistics/calendar.svg';
import { AccuracyOfGame } from '../../components/statistics/AccuracyOfGame/AccuracyOfGame';
import { AllTime } from '../../components/statistics/AllTime/AllTime';
import { AudioChallenge } from '../../components/statistics/AudioChallenge/AudioChallenge';
import { Sprint } from '../../components/statistics/Sprint/Sprint';
import { WordsLearned } from '../../components/statistics/WordsLearned/WordsLearned';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import style from './style.module.css';

export const Statistics = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAgregatedCard());
    dispatch(getUserStatistic());
  });
  return (
    <div className="container_login">
      <div className={style.title_wrapper}>
        <CalendarIcon />
        <h2 className={style.title_today}>Today</h2>
      </div>
      <div className={style.statistics_wrapper}>
        <div className={style.words_module}>
          <AccuracyOfGame />
          <WordsLearned />
        </div>
        <div className={style.game_wrapper}>
          <AudioChallenge />
        </div>
        <div className={style.game_wrapper}>
          <Sprint />
        </div>
        <div className={style.user}>
          <UserInfo />
        </div>
      </div>
      <div className={style.all_time_wrapper}>
        <AllTime />
      </div>
    </div>
  );
};
