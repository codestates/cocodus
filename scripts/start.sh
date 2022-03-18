#!/bin/bash
cd /home/ubuntu/cocodus/server
sudo ln -s /home/ubuntu/.nvm/versions/node/v16.14.0/bin/node /usr/bin/node
sudo ln -s /home/ubuntu/.nvm/versions/node/v16.14.0/bin/pm2 /usr/bin/pm2

pm2 start server.js