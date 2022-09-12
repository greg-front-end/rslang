import { UserState } from '../types/UserState';

export const setValueLocalStorage = (value: keyof UserState, data: string | number) => {
  localStorage.setItem(value, JSON.stringify(data));
};
