#!/bin/bash
cd server && pm2 start npm --no-automation --name server -- run dev 
cd ../client && pm2 start npm --no-automation --name client -- start --node-args "port=3001 sitename='eTrain'"
