/* eslint-disable no-underscore-dangle */
import { IWordsItem } from '../../../types/IWordsItem';

export const wordStatisticRight = (word: IWordsItem) => {
  if (word.userWord) {
    if (word.userWord.optional.right) {
      return {
        difficulty: word.userWord.difficulty,
        optional: {
          right: word.userWord.optional.right + 1,
          wrong: word.userWord.optional.wrong,
        },
        wordId: word._id,
      };
    }
    return {
      difficulty: word.userWord.difficulty,
      optional: {
        right: 1,
        wrong: 0,
      },
      wordId: word._id,
    };
  }
  return {
    difficulty: 'none',
    optional: {
      right: 1,
      wrong: 0,
    },
    wordId: word._id,
  };
};
