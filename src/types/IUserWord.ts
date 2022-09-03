export interface IOptional {
  [key: string]: string | number;
}

export interface IUserWord {
  difficulty: string;
  optional: IOptional;
}
