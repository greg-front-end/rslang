import { StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getLearnedWords = (statistic: StatisticsState) => {
  if (statistic.optional[KEY]) {
    return statistic.optional[KEY].learnedWordsToday;
  }
  return 0;
};
