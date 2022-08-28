import { IWordsItem } from '../../../types/IWordsItem';

function shuffle(arr: IWordsItem[]) {
  return [...arr].map((_, i, arrCopy) => {
    const rand = i + (Math.floor(Math.random() * (arrCopy.length - i)));
    // eslint-disable-next-line no-param-reassign
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
}

export const mixArray = (a: IWordsItem[]) => shuffle([...a]);
