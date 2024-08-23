import fs from 'fs';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '../App';
import { reducer } from '../store';

const PORT = process.env.PORT || 3024;

const server = express();

server.use(express.static('build', { index: false }));

server.get('*', (req, res) => {
  const frame = fs.readFileSync('./build/index.html', { encoding: 'utf8', flag: 'r' });

  let hasError = false;

  const store = configureStore({
    reducer,
  });

  const preloadedState = store.getState();

  const stream = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App/>
    </StaticRouter>,
    {
      onAllReady() {
        res.setHeader('Content-type', 'text/html');
        res.write(frame.replace('<div id="root"></div></body></html>', '<div id="root">'));

        stream.pipe(res, {end: false});

        const preloadedStateTemplate = `
          <script id="preloaded-state">
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
            window.isServerRendered = true;
          </script>
        `;

        res.write(`</div>${preloadedStateTemplate}</body></html>`);
        res.end();
      },
      onError(error) {
        hasError = true;
        console.error(error);
      }
    }
  );
});

server.listen(PORT, () => {
  console.log(`App is Running on http://localhost: ${PORT}/`);
});