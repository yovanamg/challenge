/*
 *
 * RegisterSpeaker actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  ACTION_SPEAKER,
  SAVE_DATA,
  EVENT_MSJ,
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

export function actionSpeaker(name, obj) {
  return {
    type: ACTION_SPEAKER,
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

export function eventMsj(msj) {
  return {
    type: EVENT_MSJ,
    msj,
  };
}
