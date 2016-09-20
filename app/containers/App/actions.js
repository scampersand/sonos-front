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
  request('http://172.17.0.4:5000/transport_info', {
    method: 'POST',
    body: '{"command": "PLAY"}',
    headers: new Headers({
      'content-type': 'application/json',
    }),
  });
  return {
    type: PLAY_ACTION,
  };
}

export function pauseMusic() {
  request('http://172.17.0.4:5000/transport_info', {
    method: 'POST',
    body: '{"command": "PAUSE"}',
    headers: new Headers({
      'content-type': 'application/json',
    }),
  });
  return {
    type: PAUSE_ACTION,
  };
}