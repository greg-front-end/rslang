import { combineReducers } from 'redux';

import { switchOffAudioReducer } from './switchOffAudioReducer';

export const rootReducer = combineReducers({
  switchOffAudioReducer,
});
