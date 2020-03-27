import superagent from 'superagent';
import config from '../../config';

export const getUsers = () =>
  superagent
    .get(`${config.api.url}/usuarios`)
    .then((data) => data.body);

export const getCities = () =>
  superagent
    .get(`${config.api.url}/ciudades`)
    .then((data) => data.body);

export const newUser = (body) =>
  superagent
    .post(`${config.api.url}/registro`)
    .send(body)
    .then((data) => data.body);

export const getCity = (id) =>
  superagent
    .get(`${config.api.url}/ciudad/${id}`)
    .then((data) => data.body);

export const updateUser = (body) =>
  superagent
    .put(`${config.api.url}/usuarios/${body.id}`)
    .send(body)
    .then((data) => data.body);

export const checkPass = (body) =>
  superagent
    .get(`${config.api.url}/verificar/${body.lastPass}/${body.id}`)
    .then((data) => data.body);