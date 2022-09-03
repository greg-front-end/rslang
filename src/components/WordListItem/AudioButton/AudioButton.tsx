/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';

import { URL } from '../../../constants/URL';
import { TextBookCont } from '../../TextBookContext/TextBookContext';

import styles from './AudioButton.module.css';

interface IWordsItemProps {
  path: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>
}

export const AudioButton = ({ path, Icon }: IWordsItemProps) => {
  const { audio: prevAudio, setAudio } = useContext(TextBookCont);
  const getAudioUrl = () => `${URL}${path}`;
  const audio = new Audio(getAudioUrl());

  const stopAudio = (pAudio: HTMLAudioElement) => {
    pAudio.pause();
    pAudio.currentTime = 0;
  };

  const playAudio = () => {
    stopAudio(prevAudio);
    setAudio(audio);
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
