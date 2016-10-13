import {
  DEFAULT_ACTION,
  BROWSER_PAGE_LOADED,
  BROWSER_MENU_FETCH_SUCCEEDED,
  BROWSER_MENU_FETCH_FAILED,
  BROWSER_CONTENT_FETCH_SUCCEEDED,
  BROWSER_CONTENT_FETCH_FAILED,
} from './constants'

export const defaultAction = () => ({type: DEFAULT_ACTION})
export const browserPageLoaded = () => ({type: BROWSER_PAGE_LOADED})
export const browserMenuFetchSucceeded = (data) => ({
  type: BROWSER_MENU_FETCH_SUCCEEDED,
  data,
})
export const browserMenuFetchFailed = () => ({type: BROWSER_MENU_FETCH_FAILED})
export const browserContentFetchSucceeded = () => ({type: BROWSER_CONTENT_FETCH_SUCCEEDED})
export const browserContentFetchFailed = () => ({type: BROWSER_CONTENT_FETCH_FAILED})
