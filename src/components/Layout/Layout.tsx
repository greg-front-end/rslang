import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useLogOutAfterTokenExp } from '../../hooks/useLogOutAfterTokenExp';
import { isUserLogIn } from '../../utils/isUserLogIn';
import { FooterLogIn } from '../Footer/FooterLogIn/FooterLogIn';
import { FooterLogOut } from '../Footer/FooterLogOut/FooterLogOut';
import { HeaderLogIn } from '../Header/HeaderLogIn/HeaderLogIn';
import { HeaderLogOut } from '../Header/HeaderLogOut/HeaderLogOut';
import { Spinner } from '../Spinner/Spinner';

export const Layout = () => {
  const isActiveSideBar = useAppSelector((state) => state.sideBar.isActiveSideBar);
  const location = useLocation();
  const gamesPage = ['/games/audiocall', '/games/sprint'];
  const isGamePage = () => gamesPage.includes(location.pathname);
  const isUserLoggined = useLogOutAfterTokenExp();
  let activeClass = '';
  if (isActiveSideBar && isUserLogIn()) {
    activeClass = 'main_wrapper_log_in header_active';
  } else if (isUserLogIn()) {
    activeClass = 'main_wrapper_log_in';
  }
  return (
    <div className={activeClass}>
      {isUserLoggined ? <HeaderLogIn /> : <HeaderLogOut />}
      <main>
        <Spinner />
        <Outlet />
      </main>
      {
        !isGamePage()
        && (isUserLoggined ? <FooterLogIn /> : <FooterLogOut />)
      }
    </div>
  );
};
