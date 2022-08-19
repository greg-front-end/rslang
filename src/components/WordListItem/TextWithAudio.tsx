import React from 'react';

import { AudioButton } from './AudioButton';

interface ITextWithAudioProps {
  text: string;
  translate: string;
  audioPath: string;
}
// import styles from './LoggedBtns.module.css';

export const TextWithAudio = ({ text, translate, audioPath }: ITextWithAudioProps) => (
  <div>
    <div>
      <span dangerouslySetInnerHTML={{ __html: text }} />
      <AudioButton path={audioPath} />
    </div>
    <span>{translate}</span>
  </div>
);
