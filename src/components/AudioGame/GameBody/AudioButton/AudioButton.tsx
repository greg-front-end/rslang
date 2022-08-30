import React, { useEffect } from 'react';

import { ReactComponent as AudioIcon } from '../../img/audio-btn.svg';

import styles from './AudioButton.module.css';

interface IWordsItemProps {
  path: string;
}

export const AudioButton = ({ path }: IWordsItemProps) => {
  const audio = new Audio(path);

  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => playAudio());

  return (
    <button
      type="button"
      onClick={playAudio}
    >
      <AudioIcon className={styles.icon} />
    </button>
  );
};
