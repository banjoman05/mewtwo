#!/bin/bash

while true; do
        /usr/bin/node ~/mewtwo.js
        echo `date +"%Y%m%d_%H:%M"`: Crashed, restarting | tee -a mewtwo.log
        sleep 1
done
