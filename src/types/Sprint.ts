import { IWordsItem } from './IWordsItem';

export type SprintWord = {
  id: string,
  word: string,
  translate: string,
  random: string
}

export type SprintState = {
  isLoad:boolean,
  buffer: IWordsItem[],
  pageBuffer:number,
  sprintWords: SprintWord[],
  indicators: boolean[],
  currectWrongWords: string[],
  currectWords: IWordsItem[],
  wrongWords: IWordsItem[],
  timer: number,
  timerBeforeGame: number,
  inRow: number,
  loadStatus: string
}

export type SprintCard = {
  id: string,
  word: string,
  translate: string,
  random: string
}
