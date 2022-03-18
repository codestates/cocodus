#!/bin/bash
cd /home/ubuntu/cocodus/server
sudo ln -s "$(which pm2)" /usr/bin/pm2
pm2 start server.js