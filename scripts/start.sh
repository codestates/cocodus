#!/bin/bash
echo "Running: start.sh"
cd /home/ubuntu/cocodus/server
source /etc/profile
pm2 start server.js