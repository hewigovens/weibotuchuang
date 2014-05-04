#!/bin/sh

mkdir -p build
ZIP_EXCLUDE="*.DS_Store *.swo *.swp src/*~ src/scripts/*~ src/pages/*~"

zip -r src.zip src -x $ZIP_EXCLUDE && mv src.zip build/forChromeStore.zip
