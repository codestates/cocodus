#!/bin/bash
cd /home/ubuntu/cocodus/server
authbind --deep pm2 start server.js


pm2 save
sleep 3s && pm2 status // pm2동작을 확인 - 제대로 작동했는지, codedeploy ->로그 확인