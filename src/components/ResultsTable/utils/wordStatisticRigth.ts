/* eslint-disable no-underscore-dangle */
import { DifLvls, ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IWordsItem } from '../../../types/IWordsItem';

const defineDifficulty = (n: number) => (n + 1 >= 3 ? DifLvls.Easy : DifLvls.None);

export const wordStatisticRight = (word: IWordsItem) => {
  let obj: ICreateWordOptions;
  let isNew = true;
  if (word.userWord) {
    if (Object.hasOwn(word.userWord.optional, 'right')) {
      obj = {
        difficulty: defineDifficulty(word.userWord.optional.rightInRow),
        optional: {
          right: word.userWord.optional.right + 1,
          wrong: word.userWord.optional.wrong,
          rightInRow: word.userWord.optional.rightInRow + 1,
        },
        wordId: word._id,
      };
      if (word.userWord.optional.right || word.userWord.optional.wrong) {
        isNew = false;
      }
    } else {
      obj = {
        difficulty: word.userWord.difficulty,
        optional: {
          right: 1,
          wrong: 0,
          rightInRow: 1,
        },
        wordId: word._id,
      };
    }
  } else {
    obj = {
      difficulty: 'none',
      optional: {
        right: 1,
        wrong: 0,
        rightInRow: 1,
      },
      wordId: word._id,
    };
  }
  return { obj, isNew };
};
