/* eslint-disable no-underscore-dangle */
import { IWordsItem } from '../../../types/IWordsItem';

export const wordStatisticWrong = (word: IWordsItem) => {
  if (word.userWord) {
    if (word.userWord.optional.right) {
      return {
        difficulty: word.userWord.difficulty,
        optional: {
          right: word.userWord.optional.right,
          wrong: word.userWord.optional.wrong + 1,
        },
        wordId: word._id,
      };
    }
    return {
      difficulty: word.userWord.difficulty,
      optional: {
        right: 0,
        wrong: 1,
      },
      wordId: word._id,
    };
  }
  return {
    difficulty: 'none',
    optional: {
      right: 0,
      wrong: 1,
    },
    wordId: word._id,
  };
};
