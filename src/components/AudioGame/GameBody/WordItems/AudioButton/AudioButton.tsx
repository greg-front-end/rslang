import React, { useEffect } from 'react';

import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { ReactComponent as AudioIcon } from '../../../img/audio-btn.svg';

import styles from './AudioButton.module.css';

interface IWordsItemProps {
  path: string;
}

export const AudioButton = ({ path }: IWordsItemProps) => {
  const audio = new Audio(path);
  const currentWord = useAppSelector((state) => state.audioChallenge.currentWord);

  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
    console.log('third play audio');
  };

  useEffect(() => {
    playAudio();
  }, [currentWord]);

  return (
    <button
      type="button"
      onClick={playAudio}
    >
      <AudioIcon className={styles.icon} />
    </button>
  );
};
