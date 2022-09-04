import { GamesName } from '../../../types/GamesName';
import { IStatisticsState, StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getWords = (statistic: StatisticsState, gameKey: GamesName) => {
  if (statistic.optional[KEY]) {
    return statistic.optional[KEY][gameKey].words;
  }
  return 0;
};
