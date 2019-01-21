#!/bin/bash

# Adjust to match your cell carrier's alias
PAGER="5555555555@mms.att.net"

# Adjust to match your environment
SERVICE="/usr/bin/node /home/mewtwo/mewtwo.js"

TIME=$(date +"%H:%M")

var1=`ps -ef | grep -v grep | grep "$SERVICE" | awk '{print $2}'`

if [ -n "$var1" ]
        then
        echo "Process is running"
        exit 1

else
        echo "Process not found"
        echo "Subject:Mewtwo down at $TIME" | /usr/sbin/sendmail $PAGER
fi

# Crontab to run every 15 min
# */15 * * * * ~/mewtwo_check.sh >/dev/null 2>&1
