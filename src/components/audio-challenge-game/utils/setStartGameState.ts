import { IWordsItem } from '../../../types/IWordsItem';

import { getRandomNum } from './getRandomNum';

export const setStartGameState = (words: IWordsItem[]) => {
  console.log('setStartGameState', words);
  const currentWord = words[getRandomNum(words.length)];
  return {
    words,
    currentWord,
    usedWords: [currentWord.id],
  };
};
