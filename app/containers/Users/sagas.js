import { take, call, put, cancel, fork, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getUsers,
  getCities,
  newUser,
  getCity,
  updateUser,
  checkPass,
} from './api';
import {
  getUsersSuccess,
  getUsersFail,
  getCitiesSuccess,
  getCitiesFail,
  saveUserSuccess,
  getCitySuccess,
  getCityFail,
  openModal,
  checkSuccess,
} from './actions';
import messages from './messages';
import {
  NEW_USER,
  GET_CITY,
  SAVE_EDIT_USER,
  CHECK_PASSWORD,
} from './constants';

export function* watchGetUsers() {
  try {
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersFail(messages.errList));
  }
}

export function* watchGetCities() {
  try {
    const obj = yield call(getCities);
    const cities = obj.cities;
    for (let i = 0; i < cities.length; i+=1) {
      cities[i].label = cities[i].clave.concat(' ').concat(cities[i].municipio);
      cities[i].value = cities[i].clave.concat(' ').concat(cities[i].municipio);
    }
    yield put(getCitiesSuccess(cities));
  } catch (e) {
    yield put(getCitiesFail(messages.errCities));
  }
}

export function* watchNewUser(action) {
  try {
    yield call(newUser, action.body);
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
    yield put(openModal('new', false));
    yield put(saveUserSuccess(messages.saveSuccess));
  } catch(e) {
    yield put(getCitiesFail(messages.errSave));
  }
}

export function* watchGetCity(action) {
  try {
    const city = yield call(getCity, action.id);
    yield put(getCitySuccess(city));
  } catch (e) {
    yield put(getCityFail(messages.cityErr))
  }
}

export function* watchUpdateUser(action) {
  try {
    yield call(updateUser, action.body);
    if (action.name === 'edit') {
      yield put(saveUserSuccess(messages.editSuccess));
      yield put(openModal('edit', false));
    } else if (action.name === 'delete') {
      yield put(saveUserSuccess(messages.deleteSuccess));
      yield put(openModal('delete', false));
    }
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch(e) {
      yield put(getUsersFail(messages.errUpdate));
  }
}

export function* watchCheckPass(action) {
  try {
    const validation = yield call(checkPass, action.body);
    yield put(checkSuccess(validation));
  } catch(e) {
    yield put(getUsersFail(messages.errCheck));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetUsers),
    fork(watchGetCities),
    takeLatest(NEW_USER, watchNewUser),
    takeLatest(GET_CITY, watchGetCity),
    takeLatest(SAVE_EDIT_USER, watchUpdateUser),
    takeLatest(CHECK_PASSWORD, watchCheckPass),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

export default [
  defaultSaga,
];
