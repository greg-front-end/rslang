import { IToken } from './IToken';

export interface IAuthState {
  token: IToken | null;
  name: string;
  email: string;
  id: string;
  registerStatus: string,
  registerError: string,
  loginStatus: string,
  loginError: string,
  userLoaded: boolean;
}
