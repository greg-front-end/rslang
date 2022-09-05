import { getValueLocalStorage } from '../../../utils/getValueLocalStorage';

const userId = getValueLocalStorage('UserId') ? JSON.parse(getValueLocalStorage('UserId') as string) : '';

export const getAvatarKey = () => `${userId}avatar`;

export const saveAvatar = (img: string) => {
  localStorage.setItem(getAvatarKey(), JSON.stringify(img));
};
