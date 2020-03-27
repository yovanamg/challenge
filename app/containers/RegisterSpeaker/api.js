import superagent from 'superagent';
import config from '../../config';


export const newSpeaker = (body) =>
  superagent
    .post(`${config.api.url}/speaker`)
    .send(body)
    .then((data) => data.body);
