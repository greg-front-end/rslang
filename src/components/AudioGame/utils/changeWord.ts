import { IWordsItem } from '../../../types/IWordsItem';

export const changeWord = (words: IWordsItem[], i: number) => ({
  currentWord: words[i + 1],
  currentIndex: i + 1,
});
