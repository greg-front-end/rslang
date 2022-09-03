import { IWordsItem } from '../../types/IWordsItem';

export const randomWords = (cards: IWordsItem[]) => {
  const arrTrue = Array(10).fill(true);
  const arrFalse = Array(10).fill(false);
  const arrRandomBoolean = arrTrue.concat(arrFalse).sort(() => Math.random() - 0.5);

  const clone = [...cards];
  const random = clone.sort(() => Math.random() - 0.5);

  const sprintWords = cards
    .map((el, index) => (
      {
        word: el.word,
        translate: el.wordTranslate,
        random: arrRandomBoolean[index] ? el.wordTranslate : random[index].wordTranslate,
      }
    ));

  return sprintWords;
};
