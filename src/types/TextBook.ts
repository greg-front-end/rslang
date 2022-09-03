import { IWordsItem } from './IWordsItem';
import { SprintWord } from './Sprint';

export type TextBookState = {
  cards: IWordsItem[];
  hardWords: IWordsItem[],
  // sprintWords: SprintWord[],
  // indicators: boolean[]
  group: number,
  page: number,
  pageButtons: number[],
  increment: boolean,
  decrement: boolean,
  loadStatus: string,
  switchHardWords: boolean,
}
