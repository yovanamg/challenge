/*
 *
 * Speakers actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  GET_SPEAKERS_SUCCESS,
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

export function getSpeakersSuccess(object) {
  return {
    type: GET_SPEAKERS_SUCCESS,
    object,
  };
}
