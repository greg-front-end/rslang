export type SprintWord = {
  word: string,
  translate: string,
  random: string
}

export type SprintState = {
  sprintWords: SprintWord[],
  indicators: boolean[]
}

export type SprintCard = {
  word: string,
  translate: string,
  random: string
}
