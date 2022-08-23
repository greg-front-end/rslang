import { SWITCH_OFF_AUDIO } from '../actions-types/SWITCH_OFF_AUDIO';

export const switchOffAudio = (audio: HTMLAudioElement) => ({
  type: SWITCH_OFF_AUDIO,
  audio,
});
