import { combineReducers } from 'redux';

import { wordsLoad } from '../actions/wordsLoad';

export const rootReducer = combineReducers({
  wordsLoad,
});
