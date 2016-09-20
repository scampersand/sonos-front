import { createSelector } from 'reselect';

/**
 * Direct selector to the playerPage state domain
 */
const selectPlayerPageDomain = () => (state) => state.get('playerPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PlayerPage
 */

const selectPlayerPage = () => createSelector(
  selectPlayerPageDomain(),
  (substate) => substate.toJS()
);

export default selectPlayerPage;
export {
  selectPlayerPageDomain,
};
