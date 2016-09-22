import request from 'utils/request';
import {
  DEFAULT_ACTION,
  PLAY_ACTION,
  PAUSE_ACTION,
  BACK_ACTION,
  NEXT_ACTION,
  PAGE_LOADED,
  TRANSPORT_FETCH_SUCCEEDED,
  TRANSPORT_FETCH_FAILED,
} from './constants';

const backendUrl = (window.location.hostname === '172.17.0.3' ?
                    'http://172.17.0.4:5000' : 'http://172.17.0.7:5000');

/*
 * TODO wrap this stuff in a Sonos object in utils/sonos.js
 */
export function sonos(path, options) {
  options = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    ...options,
  }
  return request(backendUrl + path, options);
}

export function sonosCmd(path, command) {
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

export function pageLoaded() {
  return {
    type: PAGE_LOADED,
  };
}

export function transportFetchSucceeded(transportInfo) {
  return {
    type: TRANSPORT_FETCH_SUCCEEDED,
    transportInfo,
  };
}

export function transportFetchFailed(message) {
  return {
    type: TRANSPORT_FETCH_FAILED,
    message
  };
}