#!/bin/bash

cd ../

git checkout master
git pull origin master

npm install

npm run build-server

pm2 reload ./build/server.js