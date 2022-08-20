import axios from 'axios';
import { Dispatch } from 'redux';

import { URL } from '../../constants/URL';
import { WORDS_LOAD } from '../actions-types/WORDS_LOAD';

export const wordsLoad = () => async (dispatch: Dispatch) => {
  const res = await axios.get(`${URL}/words`);
  const data = await res.data;
  dispatch({
    type: WORDS_LOAD,
    data,
  });
};
