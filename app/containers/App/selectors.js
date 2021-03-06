/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectTransportState = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('transportState')
);

const selectCurrentTrackInfo = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('currentTrackInfo')
);

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectCurrentTrackInfo,
  selectTransportState,
  selectLocationState,
};
