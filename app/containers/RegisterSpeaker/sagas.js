import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  newSpeaker,
} from './api';
import {
  eventMsj,
} from './actions';
import {
  ACTION_SPEAKER,
} from './constants';
import messages from './messages';

export function* watchNewSpeaker(action) {
  try {
    yield call(newSpeaker, action.name);
    yield put(eventMsj(messages.newSuccess));
    browserHistory.push('/');
  } catch (e) {
    yield put(eventMsj(messages.error));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    takeLatest(ACTION_SPEAKER, watchNewSpeaker),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}


// All sagas to be loaded
export default [
  defaultSaga,
];
