/* eslint-disable default-case */
/* eslint-disable no-case-declarations */
import { take, call, put, cancel, fork, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getEvents,
  newEvent,
  updateEvent,
  deleteEvent,
  getEventUser,
  newEventUser,
  deleteEventUser,
} from './api';
import {
  getEventsSuccess,
  eventMsj,
  openModal,
} from './actions';
import {
  ACTION_EVENT,
} from './constants';
import messages from './messages';

export function* watchGetEvents() {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const body = { id: user.id };
    const events = yield call(getEvents);
    const array = events.events;
    const eventUser = yield call(getEventUser, body);
    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < eventUser.length; j += 1) {
        if (array[i].id === eventUser[j].event_id) {
          array[i].attendance = true;
        } else {
          array[i].attendance = false;
        }
      }
    }
    yield put(getEventsSuccess(events));
  } catch (e) {
    yield put(eventMsj(messages.errGetEvent));
  }
}

export function* watchEvents(action) {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    switch (action.name) {
      case 'new':
        yield call(newEvent, action.obj);
        yield put(openModal('new', false));
        yield put(eventMsj(messages.newSuccess));
        break;
      case 'edit':
        yield call(updateEvent, action.obj);
        yield put(openModal('edit', false));
        yield put(eventMsj(messages.editSuccess));
        break;
      case 'delete':
        yield call(deleteEvent, action.obj);
        yield put(openModal('delete', false));
        yield put(eventMsj(messages.deleteSuccess));
        break;
      case 'attendance':
        const body = action.obj;
        const data = {
          event_id: body.id,
          user_id: user.id,
        };
        if (body.attendance) {
          yield call(deleteEventUser, data);
        }
        if (!body.attendance) {
          yield call(newEventUser, data);
        }
        break;
    }
    const body2 = { id: user.id };
    const events = yield call(getEvents);
    const array = events.events;
    const eventUser = yield call(getEventUser, body2);
    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < eventUser.length; j += 1) {
        if (array[i].id === eventUser[j].event_id) {
          array[i].attendance = true;
        }
        if (array[i].id !== eventUser[j].event_id) {
          array[i].attendance = false;
        }
      }
    }
    yield put(getEventsSuccess(events));
  } catch(e) {
    yield put(eventMsj(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetEvents),
    takeLatest(ACTION_EVENT, watchEvents),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
