import { StatisticsState } from '../../../types/Statistic';

export const getLearnedGraphInfo = ({ optional }: StatisticsState) => {
  const keys = Object.keys(optional);
  keys.forEach((el) => console.log(new Date(el).toString()));
  return keys.map((el) => optional[el].learnedWords);
};
