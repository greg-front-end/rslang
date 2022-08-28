import { ILogIn } from './ILogIn';

export interface IAuthState {
  token: ILogIn | null;
  name: string;
  email: string;
  id: string;
  registerStatus: string,
  registerError: string,
  loginStatus: string,
  loginError: string,
  userLoaded: boolean;
}
