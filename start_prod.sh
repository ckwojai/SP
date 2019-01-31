#!/bin/bash
cd client && sudo pm2 start npm --no-automation --name client -- run remote 
cd ../server && sudo pm2 start npm --no-automation --name server -- run dev 
