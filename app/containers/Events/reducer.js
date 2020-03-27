/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/*
 *
 * Events reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  OPEN_MODAL,
  GET_EVENTS_SUCCESS,
  EVENT_MSJ,
  SAVE_DATA,
} from './constants';

const initialState = fromJS({
  loading: true,
  loadingEvent: true,
  snackbar: {
    open: false,
    text: '',
  },
  events: [],
  showModalNew: false,
  showModalEdit: false,
  showModalDelete: false,
  id: '',
  theme: '',
  date: '',
  schedule: '',
  direction: '',
  attendance: false,
});

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_SNACKBAR_STATE:
      return state
        .set('snackbar', { open: action.open, text: action.text });
    case OPEN_MODAL:
      switch (action.name) {
        case 'new':
          return state
            .set('showModalNew', action.open);
        case 'edit':
          return state
            .set('showModalEdit', action.open);
        case 'delete':
          return state
            .set('showModalDelete', action.open);
      }
    case GET_EVENTS_SUCCESS:
      return state
        .set('loadingEvents', false)
        .set('loading', false)
        .set('events', action.object.events)
        .set('itemsPagination', action.object.itemsPagination)
        .set('total', action.object.total)
        .set('display', action.object.display)
        .set('number', 1);
    case EVENT_MSJ:
      return state
        .set('snackbar', { open: true, text: action.msj });
    case SAVE_DATA:
      const name = action.name;
      const value = action.value;
      switch (name) {
        case 'cancel':
          return state
            .set('theme', '')
            .set('date', '')
            .set('schedule', '')
            .set('direction', '');
        case 'currentEvent':
          return state
            .set('theme', value.theme)
            .set('date', value.date)
            .set('schedule', value.schedule)
            .set('direction', value.direction)
            .set('id', value.id);
        case action.name:
          return state
            .set(action.name, value);
      }
    default:
      return state;
  }
}

export default eventsReducer;
