import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { URL } from '../constants/URL';
import { ApiPath } from '../types/ApiPath';
import { ICreateWordOptions } from '../types/ICreateWordOptions';
import { getValueLocalStorage } from '../utils/getValueLocalStorage';

interface IUserSettingsOptional {
  [key: string]: {
    avatar: string;
  }
}

export interface IUserSettings {
  wordsPerDay: number,
  optional: IUserSettingsOptional
}

export const putUserSettings = createAsyncThunk<string, IUserSettings,
  { rejectValue: string }
>(
  'settingsSlice/putUserSettings',
  async (data, { rejectWithValue }) => {
    try {
      const lsDataToken = getValueLocalStorage('Token')!;
      const token = JSON.parse(lsDataToken);
      const lsDataId = getValueLocalStorage('UserId')!;
      const userId = JSON.parse(lsDataId);
      const response = await axios.put(`${URL}${ApiPath.Users}/${userId}/settings`, { ...data }, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      return response.data.optional.avatar;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.status.toString() as string);
      }
      throw error;
    }
  },
);
