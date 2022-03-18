#!/bin/bash
cd /home/ubuntu/cocodus/server
node -v
npm -v
nvm -v
npm install
npm install pm2@latest -g
sudo apt-get update