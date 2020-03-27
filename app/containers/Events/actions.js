/*
 *
 * Events actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  OPEN_MODAL,
  GET_EVENTS_SUCCESS,
  EVENT_MSJ,
  ACTION_EVENT,
  SAVE_DATA,
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

export function openModal(name, open) {
  return {
    type: OPEN_MODAL,
    name,
    open,
  };
}

export function getEventsSuccess(object) {
  return {
    type: GET_EVENTS_SUCCESS,
    object,
  };
}

export function eventMsj(msj) {
  return {
    type: EVENT_MSJ,
    msj,
  };
}

export function actionEvent(name, obj) {
  return {
    type: ACTION_EVENT,
    name,
    obj,
  };
}

export function saveData(name, value) {
  return {
    type: SAVE_DATA,
    name,
    value,
  };
}
