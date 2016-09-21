import request from 'utils/request';
import {
  DEFAULT_ACTION,
  PLAY_ACTION,
  PAUSE_ACTION,
  BACK_ACTION,
  NEXT_ACTION,
} from './constants';

const backendUrl = (window.location.hostname === '172.17.0.3' ?
                    'http://172.17.0.4:5000' : 'http://172.17.0.7:5000');

/*
 * TODO wrap this stuff in a Sonos object in utils/sonos.js
 */
function sonos(path, options) {
  options = {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    ...options,
  }
  return request(backendUrl + path, options);
}

function sonosCmd(path, command) {
  return sonos(path, {
    method: 'POST',
    body: JSON.stringify({command}),
  });
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function playMusic() {
  sonosCmd('/transport_info', 'PLAY');
  return {
    type: PLAY_ACTION,
  };
}

export function pauseMusic() {
  sonosCmd('/transport_info', 'PAUSE');
  return {
    type: PAUSE_ACTION,
  };
}

export function prevSong() {
  sonosCmd('/current_track', 'BACK');
  return {
    type: BACK_ACTION,
  };
}

export function nextSong() {
  sonosCmd('/current_track', 'NEXT');
  return {
    type: NEXT_ACTION,
  };
}
