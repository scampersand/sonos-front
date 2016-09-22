import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { sonos, sonosCmd,
         transportFetchSucceeded, transportFetchFailed,
         currentTrackFetchSucceeded, currentTrackFetchFailed } from '../App/actions';
import { PAGE_LOADED } from '../App/constants';

function* fetchTransportState() {
  const transportInfo = yield call(sonos, '/transport_info');
  if (transportInfo.data) {
    yield put(transportFetchSucceeded(transportInfo.data));
  } else {
    yield put(transportFetchFailed(transportInfo.err));
  }
}

function* fetchTransportSaga() {
  yield* takeEvery(PAGE_LOADED, fetchTransportState);
}

function* fetchCurrentTrack() {
  const currentTrack = yield call(sonos, '/current_track');
  if (currentTrack.data) {
    yield put(currentTrackFetchSucceeded(currentTrack.data));
  } else {
    yield put(currentTrackFetchFailed(currentTrack.err));
  }
}

function* fetchCurrentTrackSaga() {
  yield* takeEvery(PAGE_LOADED, fetchCurrentTrack);
}

export default [
  fetchTransportSaga,
  fetchCurrentTrackSaga,
];
