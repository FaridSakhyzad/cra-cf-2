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
  let frame = fs.readFileSync('./build/index.html', { encoding: 'utf8', flag: 'r' });
  const manifestFile = fs.readFileSync('./build/asset-manifest.json', { encoding: 'utf8', flag: 'r' });
  const manifest = JSON.parse(manifestFile);

  console.log('manifest', manifest.files);

  const cssChunkAddresses = Object.keys(manifest.files).filter((fileName) => {
    return fileName !== 'main.css' && fileName.match(/\.css$/ig);
  });

  const cssChunks = [];

  for (let i = 0; i < cssChunkAddresses.length; i++) {
    console.log(cssChunkAddresses[i], ' --- ' , manifest.files[cssChunkAddresses[i]]);

    const template = `<link href="${manifest.files[cssChunkAddresses[i]]}" rel="stylesheet">`;

    cssChunks.push(template);
  }

  console.log('cssChunks', cssChunks.join('\n'));

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

        frame = frame.replace('%CSS_CHUNKS_PLACEHOLDER%', cssChunks.join('\n'));

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