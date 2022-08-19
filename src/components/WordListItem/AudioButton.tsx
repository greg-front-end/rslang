import React from 'react';

import { URL } from '../../constants/URL';

interface IWordsItemProps {
  path: string;
}

export const AudioButton = ({ path }: IWordsItemProps) => {
  const getAudioUrl = () => `${URL}${path}`;

  const createAudio = (audioUrl: string) => new Audio(audioUrl);

  const playAudio = () => {
    const audio = createAudio(getAudioUrl());
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
