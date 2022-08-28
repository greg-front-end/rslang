import React, { useEffect } from 'react';

import { getCard } from '../../api/getCard';
import { AudioGame } from '../../components/audio-challenge-game/AudioGame';
import { getRandomNum } from '../../components/audio-challenge-game/utils/getRandomNum';
import { setGroup } from '../../features/textBookSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const AudioCall = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setGroup(getRandomNum(6)));
    dispatch(getCard());
    console.log('endDispath');
  }, []);

  return (<AudioGame />);
};
