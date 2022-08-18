import React from 'react';

import { IItem } from '../../types/IItem';

interface IItemProps {
  item: IItem;
}

export const AudioButton = ({ item }: IItemProps) => {
  const getAudioUrls = () => [item.audio, item.audioMeaning, item.audioExample].map((url) => `https://rslang-mdg.herokuapp.com/${url}`);

  const createAudio = (audioUrls: string[]) => audioUrls.map((url) => new Audio(url));

  const playAudio = () => {
    const [audio, audioMeaning, audioExample] = createAudio(getAudioUrls());
    audio.play();
    audio.onended = () => audioMeaning.play();
    audioMeaning.onended = () => audioExample.play();
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
