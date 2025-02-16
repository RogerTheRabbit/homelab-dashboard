#!/bin/bash

git fetch

read -p "Press Enter to proceed"

git pull

npm install

npm run build

sudo cp -a ./dist/. /var/www/html/homelab-dashboard/
