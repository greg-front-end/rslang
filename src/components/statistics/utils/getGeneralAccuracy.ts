import { GamesName } from '../../../types/GamesName';
import { IStatisticsState, StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getGeneralAccuracy = (statistic: StatisticsState) => {
  if (statistic.optional[KEY]) {
    const gameSt = statistic.optional[KEY];
    const generalAccuracy = (gameSt.audioCall.inAccuracy + gameSt.sprint.inAccuracy) / 2;
    return generalAccuracy;
  }
  return 0;
};
