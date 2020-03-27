import superagent from 'superagent';
import config from '../../config';

export const loginService = (credentials) =>
  superagent
    .post(`${config.api.url}/login`)
    .send(credentials)
    .then((data) => data.body);

export const registerService = (credentials) =>
  superagent
    .post(`${config.api.url}/register`)
    .send(credentials)
    .then((data) => data.body);
