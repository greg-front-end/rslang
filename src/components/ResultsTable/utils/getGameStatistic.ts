import { GamesName } from '../../../types/GamesName';
import { GameStatistics, IStatisticsState, StatisticsState } from '../../../types/Statistic';
import { dateKeyGenerator } from '../../../utils/dateKeyGenerator';

interface IGetGameStatistic {
  statistic: StatisticsState,
  newGameStatistic: GameStatistics,
  game: GamesName,
}

const KEY = dateKeyGenerator();

const obj: StatisticsState = {
  learnedWords: 0,
  optional: {
    [KEY]: {
      learnedWords: 0,
      learnedWordsToday: 0,
      audioCall: {
        inRow: 0,
        words: 0,
        inAccuracy: 0,
      },
      sprint: {
        inRow: 0,
        words: 0,
        inAccuracy: 0,
      },
    },
  },
};

export const getGameStatistic = ({ statistic, newGameStatistic, game }: IGetGameStatistic) => {
  const gameKey = game as keyof IStatisticsState;
  if (statistic.optional[KEY]) {
    return {
      learnedWords: statistic.learnedWords + newGameStatistic.words,
      optional: {
        ...statistic.optional,
        [KEY]: {
          ...statistic.optional[KEY],
          [gameKey]: newGameStatistic,
          learnedWords: statistic.learnedWords + newGameStatistic.words,
          learnedWordsToday: statistic.optional[KEY].learnedWordsToday + newGameStatistic.words,
        },
      },
    };
  }
  return {
    learnedWords: statistic.learnedWords + newGameStatistic.words,
    optional: {
      ...statistic.optional,
      [KEY]: {
        ...obj.optional[KEY],
        [gameKey]: newGameStatistic,
        learnedWords: statistic.learnedWords + newGameStatistic.words,
        learnedWordsToday: newGameStatistic.words,
      },
    },
  };
};
