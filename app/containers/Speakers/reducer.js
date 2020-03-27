/*
 *
 * Speakers reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  GET_SPEAKERS_SUCCESS,
} from './constants';

const initialState = fromJS({

  loading: true,
  loadingSpeakers: true,
  snackbar: {
    open: false,
    text: '',
  },
  speakers: [],
  name: '',
  email: '',
  title: '',
  abstract: '',
  biography: '',
});

function speakersReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_SNACKBAR_STATE:
      return state
        .set('snackbar', { open: action.open, text: action.text });
    case GET_SPEAKERS_SUCCESS:
      return state
        .set('loadingSpeakers', false)
        .set('loading', false)
        .set('speakers', action.object.speakers)
        .set('itemsPagination', action.object.itemsPagination)
        .set('total', action.object.total)
        .set('display', action.object.display)
        .set('number', 1);
    default:
      return state;
  }
}

export default speakersReducer;
