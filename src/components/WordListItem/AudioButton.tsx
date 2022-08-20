import React from 'react';

import { URL } from '../../constants/URL';

interface IWordsItemProps {
  path: string;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
}

export const AudioButton = ({ path, setAudio }: IWordsItemProps) => {
  const getAudioUrl = () => `${URL}${path}`;
  const audio = new Audio(getAudioUrl());

  const playAudio = () => {
    setAudio((prev) => {
      prev.pause();
      return audio;
    });
    audio.play();
  };

  return (
    <button
      type="button"
      onClick={playAudio}
    >
      Play
    </button>
  );
};
