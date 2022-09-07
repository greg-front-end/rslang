/* eslint-disable no-underscore-dangle */
import { DifLvls, ICreateWordOptions } from '../../../types/ICreateWordOptions';
import { IWordsItem } from '../../../types/IWordsItem';

const defineDifficulty = (n: number, word: IWordsItem) => ((n + 1 === 3) || word.userWord.difficulty === 'easy');

export const wordStatisticRight = (word: IWordsItem) => {
  let obj: ICreateWordOptions;
  let isNew = true;
  let isLearned = false;
  let hardWord = DifLvls.None;
  if (word.userWord) {
    if (Object.hasOwn(word.userWord.optional, 'right')) {
      const isEasy = defineDifficulty(word.userWord.optional.rightInRow, word);
      if (word.userWord.difficulty !== 'easy'
        && isEasy) {
        isLearned = true;
      }
      if (!isLearned && word.userWord.difficulty === DifLvls.Hard) {
        hardWord = DifLvls.Hard;
      }
      obj = {
        difficulty: isEasy ? DifLvls.Easy : hardWord,
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
  return { obj, isNew, isLearned };
};
