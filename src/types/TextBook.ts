import { IWordsItem } from './IWordsItem';

export type TextBookState = {
  cards: IWordsItem[];
  hardWords: IWordsItem[],
  group: number,
  page: number,
  pageButtons: number[],
  increment: boolean,
  decrement: boolean,
  loadStatus: string,
  switchHardWords: boolean,
  easyWordsCount: number,
}

export type CardDifChange = {
  id: string,
  difficulty: string
}
