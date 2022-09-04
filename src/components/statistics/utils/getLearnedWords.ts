import { StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getLearnedWords = (statistic: StatisticsState) => {
  if (statistic.optional[KEY]) {
    const gameSt = statistic.optional[KEY];
    const generalAccuracy = gameSt.audioCall.words + gameSt.sprint.words;
    return generalAccuracy;
  }
  return 0;
};
