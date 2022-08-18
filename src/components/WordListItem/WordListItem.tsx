import React, { RefObject, useRef } from 'react';

export interface IItem {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

interface IItemProps {
  item: IItem;
}

export const WordListItem = ({ item }: IItemProps) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef as RefObject<HTMLAudioElement>;
    audio.current?.play();
  };

  (
    <div className="item__wrapper">
      <h4>{item.word}</h4>
      <span>{item.transcription}</span>
      <span>{item.wordTranslate}</span>
      <span>{item.textMeaning}</span>
      <span>{item.textMeaningTranslate}</span>
      <span>{item.textExample}</span>
      <span>{item.textExampleTranslate}</span>
      <img src={`https://rslang-mdg.herokuapp.com/${item.image}`} alt={`${item.word} img`} />
      <audio ref={audioRef} src={`https://rslang-mdg.herokuapp.com/${item.audio}`}><track kind="captions" /></audio>
      <button
        type="button"
        onClick={playAudio}
      >
        Play
      </button>
    </div>
  );
};
