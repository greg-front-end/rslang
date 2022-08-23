// import React from 'react';

// export const TextBook = () => (<h1>TextBook</h1>);

import React from 'react';

import { WordListItem } from '../../components/WordListItem/WordListItem';

const item = {
  id: '5e9f5ee35eb9e72bc21af4ab',
  group: 0,
  page: 0,
  word: 'invite',
  image: 'files/01_0012.jpg',
  audio: 'files/01_0012.mp3',
  audioMeaning: 'files/01_0012_meaning.mp3',
  audioExample: 'files/01_0012_example.mp3',
  textMeaning: 'To <i>invite</i> is to ask someone to come to a place or event.',
  textExample: 'I will <b>invite</b> my friends to my birthday party.',
  transcription: '[inváit]',
  textExampleTranslate: 'Я приглашаю своих друзей на мой день рождения',
  textMeaningTranslate: 'Пригласить - это попросить кого-нибудь прийти на место или событие',
  wordTranslate: 'пригласить',
};

export const TextBook = () => (
  <div>
    <WordListItem item={item} />
  </div>
);
