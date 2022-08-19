import React from 'react';
import { Outlet } from 'react-router-dom';

import { isUserLogIn } from '../../utils/isUserLogIn';
import { FooterLogIn } from '../Footer/FooterLogIn/FooterLogIn';
import { FooterLogOut } from '../Footer/FooterLogOut/FooterLogOut';
import { HeaderLogIn } from '../Header/HeaderLogIn/HeaderLogIn';
import { HeaderLogOut } from '../Header/HeaderLogOut/HeaderLogOut';

export const Layout = () => (
  <>
    {isUserLogIn() ? <HeaderLogIn /> : <HeaderLogOut />}
    <main className="main">
      <Outlet />
    </main>
    {isUserLogIn() ? <FooterLogIn /> : <FooterLogOut />}
  </>
);
