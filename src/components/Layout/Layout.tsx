import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { isUserLogIn } from '../../utils/isUserLogIn';
import { FooterLogIn } from '../Footer/FooterLogIn/FooterLogIn';
import { FooterLogOut } from '../Footer/FooterLogOut/FooterLogOut';
import { HeaderLogIn } from '../Header/HeaderLogIn/HeaderLogIn';
import { HeaderLogOut } from '../Header/HeaderLogOut/HeaderLogOut';

export const Layout = () => {
  const userAuthState = useAppSelector((state) => state.auth);
  const isActiveSideBar = useAppSelector((state) => state.sideBar.isActiveSideBar);
  const [isUserLoggined, setIsUserLoggined] = useState(false);
  let activeClass = 'main_wrapper_log_out';
  if (isActiveSideBar && isUserLogIn()) {
    activeClass = 'main_wrapper_log_in header_active';
  } else if (isUserLogIn()) {
    activeClass = 'main_wrapper_log_in';
  } else {
    activeClass = 'main_wrapper_log_out';
  }
  useEffect(() => {
    if (userAuthState.token) {
      setIsUserLoggined(isUserLogIn());
    }
    if (!userAuthState.token) {
      setIsUserLoggined(isUserLogIn());
    }
  }, [userAuthState.token]);
  return (
    <div className={activeClass}>
      {isUserLoggined ? <HeaderLogIn /> : <HeaderLogOut />}
      <main>
        <Outlet />
      </main>
      {isUserLoggined ? <FooterLogIn /> : <FooterLogOut />}
    </div>
  );
};
