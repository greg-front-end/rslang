import { StatisticsState } from '../../../types/Statistic';

export const getLearnedGraphInfo = ({ optional }: StatisticsState) => {
  const keys = Object.keys(optional);
  return keys.map((el) => optional[el].learnedWords);
};
