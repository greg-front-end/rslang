import { IWordsItem } from '../../types/IWordsItem';
import { isUserLogIn } from '../../utils/isUserLogIn';

export const randomWords = (cards: IWordsItem[]) => {
  const arrTrue = Array(10).fill(true);
  const arrFalse = Array(10).fill(false);
  const arrRandomBoolean = arrTrue.concat(arrFalse).sort(() => Math.random() - 0.5);

  const clone = [...cards];
  const random = clone.sort(() => Math.random() - 0.5);

  const sprintWords = cards
    .map((el, index) => (
      {
        // eslint-disable-next-line no-underscore-dangle
        id: isUserLogIn() ? el._id : el.id,
        word: el.word,
        translate: el.wordTranslate,
        random: arrRandomBoolean[index] ? el.wordTranslate : random[index].wordTranslate,
      }
    ));

  return sprintWords;
};
