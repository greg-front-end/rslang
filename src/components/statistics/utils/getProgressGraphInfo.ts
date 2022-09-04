import { GamesName } from '../../../types/GamesName';
import { StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

const KEY = dateKeyGenerator();

export const getProgressGraphInfo = ({ optional }: StatisticsState) => {
  const keys = Object.keys(optional);
  return keys.map((el) => optional[el].learnedWords);
};
