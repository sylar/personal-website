#!/bin/bash
if [ -z ${TRAVIS_BRANCH+x} ]; then
  curl constantinescu.io
  curl constantinescu.io/cv
fi
