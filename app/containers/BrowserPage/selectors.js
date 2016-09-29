import { createSelector } from 'reselect';

/**
 * Direct selector to the browserPage state domain
 */
const selectBrowserPageDomain = () => (state) => state.get('browserPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BrowserPage
 */

const selectBrowserPage = () => createSelector(
  selectBrowserPageDomain(),
  (substate) => substate.toJS()
);

export default selectBrowserPage;
export {
  selectBrowserPageDomain,
};
