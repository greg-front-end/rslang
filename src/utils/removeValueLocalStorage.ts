import { UserState } from '../types/UserState';

export const removeValueLocalStorage = (value: keyof UserState) => localStorage.removeItem(value);
