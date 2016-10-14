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
  CHOOSE_MENU_ITEM,
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

function* fetchBrowserContent() {
  while (true) {
    const { path } = yield take(CHOOSE_MENU_ITEM)
    const browserContent = yield call(sonos, path)
    if (browserContent.data) {
      yield put(browserContentFetchSucceeded(browserContent.data))
    } else {
      yield put(browserContentFetchFailed(browserContent.err))
    }
  }
}

export default [
  refreshBrowserMenu,
  fetchBrowserContent,
]
