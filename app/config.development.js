const API_PATH = '34.70.218.175:3001';
const stage = process.env.NODE_ENV;
const config = {
  api: {
    url: `${API_PATH}`,
    path: API_PATH,
  },
  stage,
};

export default config;
