#!/usr/bin/env bash

mkdir -p ssl
openssl req -x509 -newkey rsa:2048 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes -subj "/C=UK/ST=Greater London/L=London/O=feedMyPixel-dev/CN=localhost"
