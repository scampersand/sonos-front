import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  PLAY_ACTION,
  PAUSE_ACTION,
  TRANSPORT_FETCH_SUCCEEDED,
  TRANSPORT_FETCH_FAILED,
  CURRENT_TRACK_FETCH_SUCCEEDED,
  CURRENT_TRACK_FETCH_FAILED,
} from './constants';

const initialState = fromJS({
  transportState: 'PLAYING',
  currentTrackInfo: {
    title: '',
    artist: '',
    album: '',
    album_art: 'http://placehold.it/512x512',
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_ACTION:
      return state.merge({
        transportState: 'PLAYING',
      });
    case PAUSE_ACTION:
      return state.merge({
        transportState: 'PAUSED_PLAYBACK',
      });
    case TRANSPORT_FETCH_SUCCEEDED:
      return state.merge({
        transportState: action.transportInfo.current_transport_state,
      });
    case CURRENT_TRACK_FETCH_SUCCEEDED:
      return state.merge({
        currentTrackInfo: action.currentTrackInfo,
      });
    case TRANSPORT_FETCH_FAILED:
    case CURRENT_TRACK_FETCH_FAILED:
      console.log("failed to contact server");
      return state;
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default appReducer;
