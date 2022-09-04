import { GamesName } from '../../../types/GamesName';
import { StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getInRow = (statistic: StatisticsState, gemeKey: GamesName) => {
  const gKey = gemeKey as GamesName;
  if (statistic.optional[KEY]) {
    return statistic.optional[KEY][gKey].inRow;
  }
  return 0;
};
