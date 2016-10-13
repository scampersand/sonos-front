import { delay, takeEvery, takeLatest } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import { sonos } from 'containers/App/actions'
import {
  browserMenuFetchSucceeded,
  browserMenuFetchFailed,
  browserContentFetchSucceeded,
  browserContentFetchFailed,
} from './actions'
import {
  BROWSER_PAGE_LOADED,
  REFRESH_BROWSER_MENU,
} from './constants'

function* fetchBrowserMenu() {
  const browserMenu = yield call(sonos, '/browse/')
  if (browserMenu.data) {
    yield put(browserMenuFetchSucceeded(browserMenu.data))
  } else {
    yield put(browserMenuFetchFailed(browserMenu.err))
  }
}

function* refreshBrowserMenu() {
  yield* takeEvery([
    BROWSER_PAGE_LOADED,
    REFRESH_BROWSER_MENU,
  ], () => [
    fetchBrowserMenu(),
  ])
}

export default [
  refreshBrowserMenu,
]
