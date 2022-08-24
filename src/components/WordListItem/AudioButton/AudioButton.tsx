import React from 'react';

import { URL } from '../../../constants/URL';
import { stopAudio } from '../../../features/audioSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

import styles from './AudioButton.module.css';

interface IWordsItemProps {
  path: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>
}

export const AudioButton = ({ path, Icon }: IWordsItemProps) => {
  const getAudioUrl = () => `${URL}${path}`;
  const audio = new Audio(getAudioUrl());
  const dispatch = useAppDispatch();

  const playAudio = () => {
    dispatch(stopAudio(audio));
    audio.play();
  };

  return (
    <button
      type="button"
      onClick={playAudio}
      className={styles.audio__button}
    >
      <Icon />
    </button>
  );
};
