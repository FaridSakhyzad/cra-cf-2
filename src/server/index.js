import fs from 'fs';
import React from 'react';
import express from 'express';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import App from '../App';

const PORT = process.env.PORT || 3024;

const server = express();

server.use(express.static('build', { index: false }));

server.use('/', (req, res) => {
  const frame = fs.readFileSync('./build/index.html', { encoding: 'utf8', flag: 'r' });

  const data = renderToString(
    <React.StrictMode>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );

  const response = frame.replace('<div id="root"></div>', `<div id="root">${data}</div>`)

  res.send(response);
});

server.listen(PORT, () => {
  console.log(`CRA 2 is Running on http://localhost: ${PORT}/`);
});