import superagent from 'superagent';
import config from '../../config';

export const getSpeakers = () =>
  superagent
    .get(`${config.api.url}/speakers`)
    .then((data) => data.body);
