/*
 *
 * Users reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  SAVE_USER,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  SAVE_USER_SUCCESS,
  GET_CITY_SUCCESS,
  OPEN_MODAL,
  CHECK_SUCCESS,
  DATA_PAGINATION,
} from './constants';

const initialState = fromJS({
  loading: true,
  subLoading: true,
  loadingUsers: true,
  snackbar: {
    open: false,
    text: ''
  },
  users: [],
  showModalNew: false,
  cities: [],
  username: '',
  password: '',
  confirmPassword: '',
  rol: '',
  ubication: '',
  showModalEdit: false,
  userObject: {},
  clave: '',
  municipio: '',
  lastPass: '',
  validation: false,
  city: {
    municipio: '',
    clave: '',
  },
  showModalDelete: false,
  roles: [
    { value: 'Admin', label: 'Administrador' },
    { value: 'Admin Inmuebles', label: 'Admin Inmuebles'},
    { value: 'Admin Mantenimiento', label: 'Admin Mantenimiento'},
    { value: 'Admin Telefonía', label: 'Admin Telefonía'},
  ],
  number: 1,
  display: 5,
  total: 5,
  itemsPagination: [],
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_SNACKBAR_STATE:
      return state
        .set('snackbar', { open: action.open, text: action.text });
    case GET_USERS_SUCCESS:
      const data = action.object.users;
      return state
        .set('loadingUsers', false)
        .set('loading', false)
        .set('subLoading', false)
        .set('users', List.of(...data))
        .set('itemsPagination', action.object.itemsPagination)
        .set('total', action.object.total)
        .set('display', action.object.display)
        .set('number', 1);
    case GET_USERS_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error })
        .set('loadingUsers', false);
    case SAVE_USER:
      switch(action.name) {
        case 'username':
          return state
            .set('username', action.value);
        case 'password':
          return state
            .set('password', action.value);
        case 'confirmPassword':
          return state
            .set('confirmPassword', action.value);
        case 'lastPass':
          return state
            .set('lastPass', action.value);
        case 'rol':
          return state
            .set('rol', action.value);
        case 'ubication':
          return state
            .set('ubication', action.value);
        case 'clave':
            return state
              .set('clave', action.value);
        case 'municipio':
          return state
            .set('municipio', action.value);
        case 'currentUser':
          return state
            .set('username', action.value.username)
            .set('rol', action.value.rol)
            .set('id', action.value.id)
            .set('ubication', action.value.ubicacion)
            .set('clave', action.value.clave)
            .set('municipio', action.value.municipio)
        case 'delete':
          return state
            .set('username', action.value)
            .set('password', action.value)
            .set('confirmPassword', action.value)
            .set('rol', action.value)
            .set('ubication', action.value)
            .set('clave', action.value)
            .set('municipio', action.value)
            .set('validation', false)
            .set('lastPass', action.value);
      }
    case GET_CITIES_SUCCESS:
      const dataC = action.cities;
      return state
        .set('cities', List.of(...dataC));
    case GET_CITIES_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    case SAVE_USER_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case GET_CITY_SUCCESS:
      return state
        .set('city', action.city)
    case OPEN_MODAL:
      switch(action.name) {
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
    case CHECK_SUCCESS:
      return state
        .set('validation', action.validation);
    case DATA_PAGINATION:
      switch(action.name) {
        case 'number':
            const lastDate = parseInt(10) * parseInt(action.value.number);
            const firstDate = parseInt(lastDate) * parseInt(action.value.number - 1) / action.value.number;
            let array = action.value.itemsPagination.slice(firstDate, lastDate);
            return state
            .set('number', action.value.number)
            .set('users', array);
        case action.name:
          return state
            .set(action.name, action.value);
      }
    default:
      return state;
  }
}

export default usersReducer;
