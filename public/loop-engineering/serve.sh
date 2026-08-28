#!/bin/bash
#
# Starts a local web server for this deck (local use only, not deployed).
#
# ./serve.sh 3000 -> http://localhost:3000
#

port=$1
if [ $# -ne 1 ]
then
  port=8000
fi

if [ $(uname -s) == "Darwin" ]
then
  open=open
else
  open=xdg-open
fi

$open http://localhost:$port/index.html && python3 -m http.server $port
