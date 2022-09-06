import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { getAgregatedCard } from '../../api/getAggregatedCard';
import { getCard } from '../../api/getCard';
import { getHardWords } from '../../api/getHardWords';
import { ReactComponent as LvlSettingIcon } from '../../assets/svg/lvl_settings.svg';
import { LevelButtons, levels } from '../../components/LevelButtons/LevelButtons';
import { Pagination } from '../../components/Pagination/Pagination';
import { QuickStartGame } from '../../components/QuickStartGame/QuickStartGame';
import { TextBookContext } from '../../components/TextBookContext/TextBookContext';
import { WordListItem } from '../../components/WordListItem/WordListItem';
import { setGroup, setPage } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { LoadStatus } from '../../types/LoadStatus';
import { getValueLocalStorage } from '../../utils/getValueLocalStorage';
import { isUserLogIn } from '../../utils/isUserLogIn';

import style from './TextBook.module.css';

export const TextBook: React.FC = () => {
  const [audio, setAudio] = useState(new Audio());
  const [isEasy, setIsEasy] = useState(false);
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.textBook.cards);
  const loadStatus = useAppSelector((state) => state.textBook.loadStatus);
  const hardWords = useAppSelector((state) => state.textBook.hardWords);
  const page = useAppSelector((state) => state.textBook.page);
  const group = useAppSelector((state) => state.textBook.group);
  const [isActiveLvlSettingBtn, setIsActiveLvlSettingBtn] = useState(false);
  const [isActiveLvlSettingMenu, setIsActiveLvlSettingMenu] = useState(false);
  const toggleHardWords = useAppSelector((state) => state.textBook.switchHardWords);
  console.log(isActiveLvlSettingBtn);
  console.log(isActiveLvlSettingMenu);
  const toggleDispatchWords = () => (toggleHardWords
    ? dispatch(getHardWords())
    : dispatch(getAgregatedCard())
  );

  const handleActiveLvlSettingMenu = () => {
    setIsActiveLvlSettingMenu(!isActiveLvlSettingMenu);
  };
  const closeLvlSettingMenu = () => {
    setIsActiveLvlSettingMenu(false);
  };
  const showLvlSettingBtn = () => {
    if (window.innerWidth <= 1100) {
      setIsActiveLvlSettingBtn(true);
    } else {
      setIsActiveLvlSettingBtn(false);
    }
  };
  window.addEventListener('resize', showLvlSettingBtn);

  useEffect(() => {
    showLvlSettingBtn();
    dispatch(setPage(Number(getValueLocalStorage('page'))));
    dispatch(setGroup(Number(getValueLocalStorage('group'))));

    isUserLogIn() ? toggleDispatchWords() : dispatch(getCard());
  }, [page, group, toggleHardWords]);

  useEffect(() => {
    if (loadStatus === LoadStatus.fulfilled) {
      const easyWords = cards
        .filter((el) => (el.userWord ? el.userWord.difficulty === 'easy' : 0));
      const easy = easyWords.length === cards.length;
      setIsEasy(easy);
    }
  }, [loadStatus, cards]);

  return (
    <TextBookContext value={{ audio, setAudio, isEasy }}>
      <div className={isUserLogIn() ? '' : 'container'}>
        <div className={isUserLogIn() ? style.wrapper : `${style.wrapper} ${style.wrapper_logout}`}>
          {isActiveLvlSettingBtn && (
            <button
              type="button"
              className={isUserLogIn() ? style.level_setting_btn : `${style.level_setting_btn} ${style.level_setting_btn_log_out}`}
              onClick={handleActiveLvlSettingMenu}
            >
              <LvlSettingIcon />
            </button>
          )}
          <h2 className={!toggleHardWords ? `title ${levels[group].level} ${style.title}` : `title hard_group ${style.title}`}>
            {
              !toggleHardWords
                ? `${levels[group].level} ${levels[group].name}`
                : 'Hard words'
            }
          </h2>
          {!toggleHardWords && <Pagination />}
          <LevelButtons
            closeLvlSettingMenu={closeLvlSettingMenu}
            isActiveLvlSettingMenu={isActiveLvlSettingMenu}
          />
          {(toggleHardWords ? hardWords : cards)
            .map((item) => (<WordListItem key={nanoid()} item={item} />))}
        </div>
      </div>
    </TextBookContext>
  );
};
