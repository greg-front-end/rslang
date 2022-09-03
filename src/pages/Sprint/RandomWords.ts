import { IWordsItem } from '../../types/IWordsItem';

export const randomWords = (cards: IWordsItem[]) => {
  // eslint-disable-next-line no-debugger
  // debugger;

  console.log('cards');
  console.log(cards);
  const clone = [...cards];
  const random = clone.sort(() => Math.random() - 0.5);
  console.log(random);

  const sprintWords = cards
    .map((el, index) => (
      { word: el.word, translate: el.wordTranslate, random: random[index].wordTranslate }
    ));

  return sprintWords;
};
