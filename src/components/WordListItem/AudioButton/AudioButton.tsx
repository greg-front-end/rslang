import React from 'react';
import { useDispatch } from 'react-redux';

import { URL } from '../../../constants/URL';
import { switchOffAudio } from '../../../store/actions/switchOffAudio';

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
  const dispatch = useDispatch();

  const playAudio = () => {
    dispatch(switchOffAudio(audio));
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