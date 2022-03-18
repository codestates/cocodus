#!/bin/bash
cd /home/ubuntu/cocodus/server
sudo ln -s /home/ubuntu/.nvm/versions/node/v16.14.0/bin/node /usr/bin/node
/home/ubuntu/.nvm/versions/node/v16.14.0/bin/pm2 start cocodus/server/server.js