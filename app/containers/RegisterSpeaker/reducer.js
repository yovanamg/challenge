/*
 *
 * RegisterSpeaker reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  EVENT_MSJ,
  SAVE_DATA,
} from './constants';

const initialState = fromJS({
  snackbar: {
    open: false,
    text: '',
  },
  name: '',
  email: '',
  title: '',
  abstract: '',
  biography: '',
});

function registerSpeakerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_SNACKBAR_STATE:
      return state
        .set('snackbar', { open: action.open, text: action.text });
    case EVENT_MSJ:
      return state
        .set('snackbar', { open: true, text: action.msj });
    case SAVE_DATA:
      switch (action.name) {
        case 'cancel':
          return state
          .set('name', '')
          .set('email', '')
          .set('title', '')
          .set('abstract', '')
          .set('biography', '');
        case action.name:
          return state
            .set(action.name, action.value);
      }
    default:
      return state;
  }
}

export default registerSpeakerReducer;
