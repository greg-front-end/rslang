export type StatisticsState = {
  learnedWords: number,
  optional: StatisticsOptional
}
export type StatisticsOptional = {
  [key: string]: IStatisticsState
}
export type GameStatistics = {
  inRow: number
  words: number
  inAccuracy: number
}

export interface IStatisticsState {
  learnedWords: number,
  learnedWordsToday: number,
  audioCall: GameStatistics,
  sprint: GameStatistics
}
