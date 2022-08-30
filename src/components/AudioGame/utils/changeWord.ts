import { IWordsItem } from '../../../types/IWordsItem';

export const changeWord = (words: IWordsItem[], i: number) => {
  console.log('index', i);
  return {
    currentWord: words[i + 1],
    currentIndex: i + 1,
  };
};
