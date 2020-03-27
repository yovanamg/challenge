import superagent from 'superagent';
import config from '../../config';

export const getEvents = () =>
  superagent
    .get(`${config.api.url}/events`)
    .then((data) => data.body);

export const newEvent = (body) =>
  superagent
    .post(`${config.api.url}/event`)
    .send(body)
    .then((data) => data.body);

export const updateEvent = (body) =>
  superagent
    .put(`${config.api.url}/event/${body.id}`)
    .send(body)
    .then((data) => data.body);

export const deleteEvent = (body) =>
  superagent
    .delete(`${config.api.url}/event/${body.id}`)
    .send(body)
    .then((data) => data.body);

export const getEventUser = (body) =>
  superagent
    .get(`${config.api.url}/event_user/${body.id}/`)
    .then((data) => data.body);

export const newEventUser = (body) =>
  superagent
    .post(`${config.api.url}/event_user`)
    .send(body)
    .then((data) => data.body);

export const deleteEventUser = (body) =>
  superagent
    .delete(`${config.api.url}/event_user/${body.event_id}/${body.user_id}`)
    .send(body)
    .then((data) => data.body);
