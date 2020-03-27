/*
 *
 * Users actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  SAVE_USER,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  NEW_USER,
  SAVE_USER_SUCCESS,
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_CITY_FAIL,
  SAVE_EDIT_USER,
  OPEN_MODAL,
  CHECK_PASSWORD,
  CHECK_SUCCESS,
  DATA_PAGINATION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setSnackbarState(open, text) {
  return {
    type: SET_SNACKBAR_STATE,
    open,
    text,
  };
}

export function getUsersSuccess(object) {
  return {
    type: GET_USERS_SUCCESS,
    object,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

export function saveUser(name, value) {
  return {
    type: SAVE_USER,
    name,
    value,
  };
}

export function getCitiesSuccess(cities) {
  return {
    type: GET_CITIES_SUCCESS,
    cities,
  };
}

export function getCitiesFail (error) {
  return {
    type: GET_CITIES_FAIL,
    error,
  };
}

export function newUser(body) {
  return {
    type: NEW_USER,
    body,
  };
}

export function saveUserSuccess (message) {
  return {
    type: SAVE_USER_SUCCESS,
    message,
  };
}

export function getCity (id) {
  return {
    type: GET_CITY,
    id,
  };
}

export function getCitySuccess (city) {
  return {
    type: GET_CITY_SUCCESS,
    city,
  };
}

export function getCityFail (err) {
  return {
    type: GET_CITY_FAIL,
    err,
  };
}

export function saveEditUser (name, body) {
  return {
    type: SAVE_EDIT_USER,
    name,
    body,
  };
}

export function openModal(name, open) {
  return {
    type: OPEN_MODAL,
    name,
    open,
  };
}

export function checkPassword(body) {
  return {
    type: CHECK_PASSWORD,
    body,
  };
}

export function checkSuccess(validation) {
  return {
    type: CHECK_SUCCESS,
    validation,
  };
}

export function dataPagination(name, value) {
  return {
    type: DATA_PAGINATION,
    name,
    value,
  };
}