import React from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useLogOutAfterTokenExp } from '../../hooks/useLogOutAfterTokenExp';
import { isUserLogIn } from '../../utils/isUserLogIn';
import { FooterLogIn } from '../Footer/FooterLogIn/FooterLogIn';
import { FooterLogOut } from '../Footer/FooterLogOut/FooterLogOut';
import { HeaderLogIn } from '../Header/HeaderLogIn/HeaderLogIn';
import { HeaderLogOut } from '../Header/HeaderLogOut/HeaderLogOut';

export const Layout = () => {
  const isActiveSideBar = useAppSelector((state) => state.sideBar.isActiveSideBar);
  const isUserLoggined = useLogOutAfterTokenExp();
  let activeClass = 'main_wrapper_log_out';
  if (isActiveSideBar && isUserLogIn()) {
    activeClass = 'main_wrapper_log_in header_active';
  } else if (isUserLogIn()) {
    activeClass = 'main_wrapper_log_in';
  } else {
    activeClass = 'main_wrapper_log_out';
  }
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
