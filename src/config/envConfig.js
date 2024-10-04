const getConfig = () => ({
  ROOT_ADMIN_URL: process.env.REACT_APP_ROOT_ADMIN_URL,
  ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT,
  BACKEND_URL: process.env.REACT_APP_BACKEND_URL
});

const config = getConfig();

export default config
