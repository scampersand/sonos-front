import { createSelector } from 'reselect'

export const selectBrowserPageDomain = (state) => state.get('browser')

export const selectBrowser = createSelector(
  selectBrowserPageDomain,
  (substate) => substate.toJS()
)
export default selectBrowser

export const selectBrowserMenu = createSelector(
  selectBrowser,
  (substate) => substate.menu
)

export const selectBrowserContent = createSelector(
  selectBrowser,
  (substate) => substate.content
)
