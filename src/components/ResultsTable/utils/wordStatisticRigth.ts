/* eslint-disable no-underscore-dangle */
import { ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IWordsItem } from '../../../types/IWordsItem';

export const wordStatisticRight = (word: IWordsItem) => {
  let obj: ICreateWordOptions;
  let isNew = true;
  if (word.userWord) {
    if (Object.hasOwn(word.userWord.optional, 'right')) {
      obj = {
        difficulty: word.userWord.difficulty,
        optional: {
          right: word.userWord.optional.right + 1,
          wrong: word.userWord.optional.wrong,
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
      },
      wordId: word._id,
    };
  }
  return { obj, isNew };
};
