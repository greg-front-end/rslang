import { GamesName } from '../../../types/GamesName';
import { IStatisticsState, StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getWords = (statistic: StatisticsState, gemeKey: GamesName) => {
  const gKey = gemeKey as GamesName;
  if (statistic.optional[KEY]) {
    return statistic.optional[KEY][gKey].words;
  }
  return 0;
};
