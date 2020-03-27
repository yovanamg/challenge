import { take, call, put, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getSpeakers,
} from './api';
import {
  getSpeakersSuccess,
  setSnackbarState,
} from './actions';
import messages from './messages';


export function* watchGetSpeakers() {
  try {
    const obj = yield call(getSpeakers);
    yield put(getSpeakersSuccess(obj));
  } catch (e) {
    yield put(setSnackbarState(true, messages.errGet));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetSpeakers),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}


// All sagas to be loaded
export default [
  defaultSaga,
];
