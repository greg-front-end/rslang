import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

export const Sprint = () => {
  const cards = useAppSelector((state) => state.textBook.cards);
  console.log('sprint', cards);
  return (<h1>Sprint</h1>);
};
