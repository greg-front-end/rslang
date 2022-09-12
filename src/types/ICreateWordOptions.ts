export enum DifLvls{
  Hard = 'hard',
  Easy = 'easy',
  None = 'none',
}

export interface IWordOptional {
  right: number;
  wrong: number;
  rightInRow: number;
}

export interface ICreateWordOptions {
  wordId: string;
  difficulty: string;
  optional: IWordOptional;
}
