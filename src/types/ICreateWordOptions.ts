interface IOptional {
  rigthTime: number;
}

export interface ICreateWordOptions {
  wordId: string;
  difficulty: string;
  optional: IOptional;
}
