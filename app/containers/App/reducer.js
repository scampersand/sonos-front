import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  PLAY_ACTION,
  PAUSE_ACTION,
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
    default:
      return state;
  }
}

export default appReducer;
