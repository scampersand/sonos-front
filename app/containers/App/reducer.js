import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  PLAY_ACTION,
  PAUSE_ACTION,
  TRANSPORT_FETCH_SUCCEEDED,
  TRANSPORT_FETCH_FAILED,
} from './constants';

const initialState = fromJS({
  transportState: 'PLAYING',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
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
    case TRANSPORT_FETCH_FAILED:
      alert("failed to contact server");
      return state;
    default:
      return state;
  }
}

export default appReducer;
