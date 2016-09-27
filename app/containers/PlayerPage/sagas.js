import { delay, takeEvery, takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { sonos, sonosCmd,
         transportFetchSucceeded, transportFetchFailed,
         currentTrackFetchSucceeded, currentTrackFetchFailed,
         refreshInfos } from '../App/actions';
import { PAGE_LOADED, REFRESH_INFOS } from '../App/constants';

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
  yield take(PAGE_LOADED);
  while (true) {
    yield put(refreshInfos());
    yield delay(5000);
  }
}

export default [
  refresh,
  runTimer,
];
