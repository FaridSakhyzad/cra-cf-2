import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import { Readable, Writable } from 'stream';
import App from '../App';
import { StaticRouter } from 'react-router-dom/server';

const url = process.argv[2] || '/';

console.log(process.argv);

const renderReactAppToString = (jsx) => {
  return new Promise((resolve, reject) => {
    let html = '';

    const writableStream = new Writable({
      write(chunk, encoding, callback) {
        html += chunk.toString();
        callback();
      },
      final(callback) {
        resolve(html);
        callback();
      },
      destroy(err, callback) {
        reject(err);
        callback(err);
      }
    });

    renderToPipeableStream(jsx).pipe(writableStream);
  });
};

const jsx = <StaticRouter location={url}><App/></StaticRouter>;

renderReactAppToString(jsx)
  .then(html => {
    console.log(html); // Выводим рендеренное приложение как строку
  })
  .catch(err => {
    console.error('Ошибка SSR рендеринга:', err);
  });