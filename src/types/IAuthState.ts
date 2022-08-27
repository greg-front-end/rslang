import { ICreateUserResponse } from './ICreateUserResponse';

export interface IAuthState {
  token: ICreateUserResponse | null;
  name: string;
  email: string;
  id: string;
  registerStatus: string,
  registerError: string,
  loginStatus: string,
  loginError: string,
  userLoaded: boolean;
}
