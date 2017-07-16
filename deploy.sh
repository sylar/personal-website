#!/bin/bash
eval "$(ssh-agent -s)"
chmod 600 .travis/deploy_key.pem
ssh-add .travis/deploy_key.pem
git remote add deploy $HOST_REMOTE
git push --quiet deploy 
ssh-agent -k
