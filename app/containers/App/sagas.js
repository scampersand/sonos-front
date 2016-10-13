import { delay, takeEvery, takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { sonos,
         transportFetchSucceeded, transportFetchFailed,
         currentTrackFetchSucceeded, currentTrackFetchFailed,
         refreshInfos } from './actions';
import { APP_LOADED, REFRESH_INFOS } from './constants';

function* fetchTransportState() {
  const transportInfo = yield call(sonos, '/transport_info');
  if (transportInfo.data) {
    yield put(transportFetchSucceeded(transportInfo.data));
  } else {
    yield put(transportFetchFailed(transportInfo.err));
  }
}

function* fetchCurrentTrack() {
  const currentTrack = yield call(sonos, '/current_track');
  if (currentTrack.data) {
    yield put(currentTrackFetchSucceeded(currentTrack.data));
  } else {
    yield put(currentTrackFetchFailed(currentTrack.err));
  }
}

function* refresh() {
  yield* takeEvery(REFRESH_INFOS, () => [
    fetchCurrentTrack(),
    fetchTransportState(),
  ]);
}

function* runTimer() {
  yield take(APP_LOADED);
  while (true) {
    yield put(refreshInfos());
    yield delay(1000);
  }
}

export default [
  refresh,
  runTimer,
];
