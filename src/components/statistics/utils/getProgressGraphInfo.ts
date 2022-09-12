import { StatisticsState } from '../../../types/Statistic';

export const getProgressGraphInfo = ({ optional }: StatisticsState) => {
  const keys = Object.keys(optional);
  return keys.map((el) => optional[el].newWords);
};
