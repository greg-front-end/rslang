import { IWordsItem } from '../../../types/IWordsItem';

export const setStartGameState = (words: IWordsItem[]) => {
  console.log('setStartGameState', words);
  const currentWord = words[0];
  return {
    words,
    currentWord,
  };
};
