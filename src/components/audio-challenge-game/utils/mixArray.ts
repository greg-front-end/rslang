import { IWordsItem } from '../../../types/IWordsItem';

const shuffle = (a: IWordsItem[]) => {
  const arr = a;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const num = Math.floor(Math.random() * (i + 1));
    const d = arr[num];
    arr[num] = arr[i];
    arr[i] = d;
  }
  return arr;
};

export const mixArray = (a: IWordsItem[]) => shuffle([...a]);
