import { IWordsItem } from './IWordsItem';

export type SprintWord = {
  id:string,
  word: string,
  translate: string,
  random: string
}

export type SprintState = {
  sprintWords: SprintWord[],
  indicators: boolean[],
  currectWrongWords: string[],
  currectWords: IWordsItem[],
  wrongWords: IWordsItem[],
  timer: number,
  timerBeforeGame: number,
  inRow:number
}

export type SprintCard = {
  id:string,
  word: string,
  translate: string,
  random: string
}
