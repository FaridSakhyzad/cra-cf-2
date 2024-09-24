import React from 'react';

import { config } from '../../config/envConfig';
const { ROOT_ADMIN_URL } = config;

const adminUrl = ROOT_ADMIN_URL;

export default function StatusReport () {
  return (
    <div>
      <h1>STATUS REPORT</h1>
      <h2>process.env.ROOT_ADMIN_URL: {adminUrl}</h2>

      <br />
      <a href={adminUrl}>Back to Roots</a>
    </div>
  )
}