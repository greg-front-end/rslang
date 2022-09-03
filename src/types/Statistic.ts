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
  audioCall: GameStatistics,
  sprint: GameStatistics
}
