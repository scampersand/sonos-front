import request from 'utils/request';
import {
  DEFAULT_ACTION,
  PLAY_ACTION,
  PAUSE_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function playMusic() {
  request('http://172.17.0.4:5000/transport_state', {
    method: 'PUT',
    body: '{"current_transport_state": "PLAYING"}',
    headers: new Headers({
      'content-type': 'application/json',
    }),
  });
  return {
    type: PLAY_ACTION,
  };
}

export function pauseMusic() {
  request('http://172.17.0.4:5000/transport_state', {
    method: 'PUT',
    body: '{"current_transport_state": "PAUSED_PLAYBACK"}',
    headers: new Headers({
      'content-type': 'application/json',
    }),
  });
  return {
    type: PAUSE_ACTION,
  };
}