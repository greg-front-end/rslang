import { getValueLocalStorage } from './getValueLocalStorage';

export const isUserLogIn = () => {
  if (getValueLocalStorage('Token')) {
    return true;
  }
  return false;
};
