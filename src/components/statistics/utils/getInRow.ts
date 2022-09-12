import { GamesName } from '../../../types/GamesName';
import { StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getInRow = (statistic: StatisticsState, gameKey: GamesName) => {
  if (statistic.optional[KEY]) {
    return statistic.optional[KEY][gameKey].inRow;
  }
  return 0;
};
