// import React from 'react';

// export const TextBook = () => (<h1>TextBook</h1>);

import React from 'react';

import { WordListItem } from '../../components/WordListItem/WordListItem';

const item = {
  id: '5e9f5ee35eb9e72bc21af4a1',
  group: 0,
  page: 0,
  word: 'agree',
  image: 'files/01_0001.jpg',
  audio: 'files/01_0001.mp3',
  audioMeaning: 'files/01_0001_meaning.mp3',
  audioExample: 'files/01_0001_example.mp3',
  textMeaning: 'To <i>agree</i> is to have the same opinion or belief as another person.',
  textExample: 'The students <b>agree</b> they have too much homework.',
  transcription: '[əgríː]',
  textExampleTranslate: 'Студенты согласны, что у них слишком много домашней работы',
  textMeaningTranslate: 'Согласиться - значит иметь то же мнение или убеждение, что и другой человек',
  wordTranslate: 'согласна',
};

export const TextBook = () => (<WordListItem item={item} />);
