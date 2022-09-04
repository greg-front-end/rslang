/* eslint-disable no-underscore-dangle */
import { ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IWordsItem } from '../../../types/IWordsItem';

export const wordStatisticWrong = (word: IWordsItem) => {
  let obj: ICreateWordOptions;
  let isNew = true;
  if (word.userWord) {
    if (word.userWord.optional.right) {
      obj = {
        difficulty: word.userWord.difficulty,
        optional: {
          right: word.userWord.optional.right,
          wrong: word.userWord.optional.wrong + 1,
        },
        wordId: word._id,
      };
      if (word.userWord.optional.right || word.userWord.optional.wrong) {
        isNew = false;
      }
    }
    obj = {
      difficulty: word.userWord.difficulty,
      optional: {
        right: 0,
        wrong: 1,
      },
      wordId: word._id,
    };
  }
  obj = {
    difficulty: 'none',
    optional: {
      right: 0,
      wrong: 1,
    },
    wordId: word._id,
  };
  return { obj, isNew };
};
