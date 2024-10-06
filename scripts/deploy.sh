#!/bin/bash

git checkout master
git pull origin master

npm install

npm run build-server

APP_NAME="Admin_V2"

if pm2 list | grep -q $APP_NAME; then
  pm2 reload $APP_NAME
else
  pm2 start ./build/server.js --name $APP_NAME
fi