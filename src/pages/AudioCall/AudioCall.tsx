import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import { AudioGame } from '../../components/AudioGame/AudioGame';
import { getRandomNum } from '../../components/AudioGame/utils/getRandomNum';
import { setGroup } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const AudioCall = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setGroup(getRandomNum(6)));
    dispatch(getCard());
  }, []);

  return (<AudioGame />);
};
