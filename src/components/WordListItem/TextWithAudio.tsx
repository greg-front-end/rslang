import React from 'react';

import { AudioButton } from './AudioButton';

interface ITextWithAudioProps {
  text: string;
  translate: string;
  audioPath: string;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
}

export const TextWithAudio = ({
  text, translate, audioPath, setAudio,
}: ITextWithAudioProps) => (
  <div>
    <div>
      <span dangerouslySetInnerHTML={{ __html: text }} />
      <AudioButton path={audioPath} setAudio={setAudio} />
    </div>
    <span>{translate}</span>
  </div>
);
