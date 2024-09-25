import React from 'react';

import { config } from '../../config/envConfig';
const { ROOT_ADMIN_URL, MY_TEST_VARIABLE } = config;

export default function StatusReport () {
  console.log('MY_TEST_VARIABLE', MY_TEST_VARIABLE);

  return (
    <div>
      <h1>STATUS REPORT</h1>
      <h2>process.env.ROOT_ADMIN_URL: {ROOT_ADMIN_URL}</h2>
      <h2>process.env.MY_TEST_VARIABLE: {MY_TEST_VARIABLE}</h2>

      <br />
      <a href={ROOT_ADMIN_URL}>Back to Roots</a>
    </div>
  )
}