import { GamesName } from '../../../types/GamesName';
import { IStatisticsState, StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getAccuracy = (statistic: StatisticsState, gemeKey: GamesName) => {
  const gKey = gemeKey as GamesName;
  if (statistic.optional[KEY]) {
    return statistic.optional[KEY][gKey].inAccuracy;
  }
  return 0;
};
