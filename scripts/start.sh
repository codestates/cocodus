#!/bin/bash
export PATH=$PATH:/usr/bin
cd /home/ubuntu/cocodus/server
sudo pm2 start server.js