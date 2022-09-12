import React from 'react';

import { AudioButton } from '../AudioButton/AudioButton';

import { ReactComponent as AudioIcon } from './text-audio.svg';

import styles from './TextWithAudio.module.css';

interface ITextWithAudioProps {
  text: string;
  translate: string;
  audioPath: string;
}

export const TextWithAudio = ({
  text, translate, audioPath,
}: ITextWithAudioProps) => (
  <div className={styles.block__wrapper}>
    <div className={styles.text__wrapper}>
      <span
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <span className={styles.translate}>{translate}</span>
    </div>
    <AudioButton path={audioPath} Icon={AudioIcon} />
  </div>
);
