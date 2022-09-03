export interface IWordOptional {
  right: number;
  wrong: number;
}

export interface ICreateWordOptions {
  wordId: string;
  difficulty: string;
  optional: IWordOptional;
}
