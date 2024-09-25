const getConfig = () => ({
  ROOT_ADMIN_URL: process.env.REACT_APP_ROOT_ADMIN_URL,
  MY_TEST_VARIABLE: process.env.REACT_APP_MY_TEST_VARIABLE,
});

exports.config = getConfig();
