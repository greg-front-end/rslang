import React from 'react';

// import styles from './AudioButton.module.css';

interface IWordsItemProps {
  path: string;
}

export const AudioButton = ({ path }: IWordsItemProps) => {
  const audio = new Audio(path);

  const playAudio = () => {
    audio.play();
  };

  return (
    <button
      type="button"
      onClick={playAudio}
    // className={styles.audio__button}
    >
      Play
    </button>
  );
};
