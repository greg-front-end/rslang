import { SWITCH_OFF_AUDIO } from '../actions-types/SWITCH_OFF_AUDIO';

const initState = {
  audio: new Audio(),
};

const initAction = {
  type: '',
  audio: new Audio(),
};

export const switchOffAudioReducer = (state = initState, { type, audio } = initAction) => {
  const prevAudio = state.audio;
  switch (type) {
    case SWITCH_OFF_AUDIO:
      prevAudio.pause();
      prevAudio.currentTime = 0;
      return {
        ...state,
        audio,
      };
    default:
      return state;
  }
};
