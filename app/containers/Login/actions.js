/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_FAIL,
  SET_SNACKBAR_STATE,
  SAVE_DATA,
  REGISTER_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginAction(email, password) {
  return {
    type: LOGIN_ACTION,
    email,
    password,
  };
}

export function loginActionSuccess() {
  return {
    type: LOGIN_ACTION_SUCCESS,
  };
}

export function loginActionFail(error) {
  return {
    type: LOGIN_ACTION_FAIL,
    error,
  };
}

export function saveData(name, value) {
  return {
    type: SAVE_DATA,
    name,
    value,
  };
}

export function setSnackbarState(open, text) {
  return {
    type: SET_SNACKBAR_STATE,
    open,
    text,
  };
}

export function registerAction(email, password) {
  return {
    type: REGISTER_ACTION,
    email,
    password,
  };
}
