import { IWordsItem } from '../../../types/IWordsItem';

import { getRandomNum } from './getRandomNum';
import { mixArray } from './mixArray';

export const createBtnsArray = (n: number, words: IWordsItem[], curWord: IWordsItem) => {
  const btnsArr = [curWord.wordTranslate];
  while (btnsArr.length !== n) {
    const btn = words[getRandomNum(words.length)].wordTranslate;
    if (!btnsArr.includes(btn)) {
      btnsArr.push(btn);
    }
  }
  return mixArray(btnsArr);
};
