import React, {useEffect} from 'react';

import config from '../../config/envConfig';
import { testEndpoint } from '../../api/auth';

const { ROOT_ADMIN_URL, ENVIRONMENT, BACKEND_URL } = config;

export default function StatusReport () {
  const restoreSession = async () => {
    const result = await testEndpoint();

    console.log('result', result);
  };

  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <div>
      <h1>SAMPLE EDIT 1024</h1>
      <h2>process.env.ROOT_ADMIN_URL: {ROOT_ADMIN_URL}</h2>
      <h2>process.env.ENVIRONMENT: {ENVIRONMENT}</h2>
      <h2>process.env.BACKEND_URL: {BACKEND_URL}</h2>

      <br />
      <a href={ROOT_ADMIN_URL}>Back to Roots</a>
    </div>
  )
}