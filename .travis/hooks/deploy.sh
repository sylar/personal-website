#!/bin/bash

  eval "$(ssh-agent -s)" #start the ssh agent
  chmod 600 .travis/keys/deploy.key # this key should have push access
  ssh-add .travis/keys/deploy.key
  ssh-keyscan $HOST_IP >> ~/.ssh/known_hosts
  git remote add deploy $HOST_GIT_USER@$HOST_IP:$APP_NAME
  git config --global push.default simple
  git push deploy master -f
