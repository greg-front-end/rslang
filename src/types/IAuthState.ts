export interface IAuthState {
  token: string | null;
  name: string;
  email: string;
  id: string;
  registerStatus: string,
  registerError: string,
  loginStatus: string,
  loginError: string,
  userLoaded: boolean;
}
