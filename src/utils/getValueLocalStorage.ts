import { UserState } from '../types/UserState';

export const getValueLocalStorage = (value: keyof UserState) => localStorage.getItem(value);
