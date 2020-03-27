import { takeLatest, call, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  loginActionSuccess,
  loginActionFail,
  loginAction,
} from './actions';
import {
  LOGIN_ACTION,
  REGISTER_ACTION,
} from './constants';
import {
  loginService,
  registerService,
} from './api';

export function* watchLogin(action) {
  const { email, password } = action;
  const credentials = {
    email,
    password,
  };
  try {
    const res = yield call(loginService, credentials);
    yield localStorage.setItem('user', JSON.stringify(res.data.token.payload));
    yield put(loginActionSuccess());
    browserHistory.push('/events');
  } catch (e) {
    yield put(loginActionFail('Email o contraseña incorrectos.'));
  }
}

export function* watchRegister(action) {
  const { email, password } = action;
  const credentials = {
    email,
    password,
  };
  try {
    yield call(registerService, credentials);
    yield put(loginActionFail('Registro exitoso.'));
    const res = yield call(loginService, credentials);
    yield localStorage.setItem('user', JSON.stringify(res.data.token.payload));
    yield put(loginActionSuccess());
    browserHistory.push('/events');
  } catch (e) {
    yield put(loginActionFail('El Email ya esta registrado.'));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    takeLatest(LOGIN_ACTION, watchLogin),
    takeLatest(REGISTER_ACTION, watchRegister),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

export default [
  defaultSaga,
];
