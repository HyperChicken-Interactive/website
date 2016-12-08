#!/bin/sh

while true; do
        cd $HOME/repos/website; git pull
        cd $HOME/repos/website; make
        sleep 15
done
