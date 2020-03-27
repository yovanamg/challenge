/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
  LOGIN_ACTION_FAIL,
  SET_SNACKBAR_STATE,
  LOGIN_ACTION_SUCCESS,
  SAVE_DATA,
} from './constants';

const initialState = fromJS({
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
  errorTextPass: '',
  snackbar: {
    open: false,
    text: '',
  },
  loading: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_ACTION: {
      const email = state.get('email');
      const password = state.get('password');
      const errorTextPass = state.get('errorTextPass');
      if (!errorTextPass) {
        return state.merge({
          email,
          password,
          loading: true,
        });
      }
      return state;
    }
    case LOGIN_ACTION_SUCCESS:
      return state
        .set('email', '')
        .set('password', '')
        .set('loading', false);
    case LOGIN_ACTION_FAIL: {
      const snackbarState = {
        open: true,
        text: action.error,
      };
      return state
        .set('snackbar', snackbarState)
        .set('loading', false);
    }
    case SET_SNACKBAR_STATE: {
      const { open, text } = action;
      const snackbarState = {
        open,
        text,
      };
      return state.set('snackbar', snackbarState);
    }
    case SAVE_DATA:
      return state
        .set(action.name, action.value);
    default:
      return state;
  }
}

export default loginReducer;
