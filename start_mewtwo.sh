#!/bin/bash

# This is the string we will check via the ps command below.
# Change "/home/mewtwo/mewtwo.js" to match your env.
SERVICE="/usr/bin/node /home/mewtwo/mewtwo.js"

var1=`ps -ef | grep -v grep | grep "$SERVICE" | awk '{print $2}'`

if [ -n "$var1" ]
 then
 echo "Process is running"
 exit 1

else
 echo "Process not found"

 # Clean up old screen session
 screen -ls | grep mewtwo | cut -d. -f1 | awk '{print $1}' | xargs kill

 # Restart
 screen -dm -S mewtwo ~/loop.sh

fi
