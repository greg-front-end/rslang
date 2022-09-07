import React from 'react';

import { Hero } from '../../components/Hero/Hero';
import { OurAdvantages } from '../../components/OurAdvantages/OurAdvantages';
import { OurTeam } from '../../components/OurTeam/OurTeam';
import { useAppSelector } from '../../hooks/useAppSelector';

export const Main = () => {
  const registerStatus = useAppSelector((state) => state.auth.registerStatus);
  const registerError = useAppSelector((state) => state.auth.registerError);
  const loginStatus = useAppSelector((state) => state.auth.loginStatus);
  const loginError = useAppSelector((state) => state.auth.loginError);
  const userLoaded = useAppSelector((state) => state.auth.userLoaded);
  const loadStatus = useAppSelector((state) => state.auth.loadStatus);
  console.log('registerStatus', registerStatus);
  console.log('registerError', registerError);
  console.log('loginStatus', loginStatus);
  console.log('loginError', loginError);
  console.log('userLoaded', userLoaded);
  console.log('loadStatus', loadStatus);
  return (
    <>
      <Hero />
      <OurAdvantages />
      <OurTeam />
    </>
  );
};
