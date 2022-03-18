#!/bin/bash
sudo apt-get update
cd /home/ubuntu/cocodus/server
npm install
npm install pm2@latest -g