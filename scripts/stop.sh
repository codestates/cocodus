#!/bin/bash
echo "stop.sh start here------------------------------"
node -v
npm -v
nvm -v
cd /home/ubuntu/cocodus/server
pm2 stop server.js 2> /dev/null || true
pm2 delete server.js 2> /dev/null || true