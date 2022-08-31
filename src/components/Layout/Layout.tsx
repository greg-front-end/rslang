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
  const [isUserLoggined, setIsUserLoggined] = useState(false);

  useEffect(() => {
    if (userAuthState.token) {
      setIsUserLoggined(isUserLogIn());
    }
    if (!userAuthState.token) {
      setIsUserLoggined(isUserLogIn());
    }
  }, [userAuthState.token]);
  return (
    <div className={isUserLogIn() ? 'main_wrapper_log_in' : 'main_wrapper_log_out'}>
      {isUserLoggined ? <HeaderLogIn /> : <HeaderLogOut />}
      <main>
        <Outlet />
      </main>
      {isUserLoggined ? <FooterLogIn /> : <FooterLogOut />}
    </div>
  );
};
