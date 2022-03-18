#!/bin/bash
cd /home/ubuntu/cocodus/server
/usr/local/bin/pm2 start ~/server.js -i 0 --name "admin" &