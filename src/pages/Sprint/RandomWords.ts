import { IWordsItem } from '../../types/IWordsItem';

export const randomWords = (cards: IWordsItem[]) => {
  console.log(cards);

  const sprintWords = cards.map((el) => ({ word: el.word, translate: el.wordTranslate, random: 'hhh' }));
  return sprintWords;
};
