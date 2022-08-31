import { IWordsItem } from '../../../types/IWordsItem';

import { mixArray } from './mixArray';

export const setStartGameState = (cards: IWordsItem[]) => {
  const words = mixArray(cards);
  const currentWord = words[0];
  return {
    words,
    currentWord,
  };
};
