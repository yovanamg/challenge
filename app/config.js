import configDev from './config.development';

let config; //eslint-disable-line
switch (process.env.NODE_ENV) {
  case 'development':
    config = configDev;
    break;
  default:
    config = configDev;
    break;
}

export default config; // eslint-disable-line
