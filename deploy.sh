#!/bin/bash
# change directory to pages.
cd pages

# get all the available pages.
PAGES=($(ls -d */ | cut -f1 -d'/'))
PAGES_TOTAL=${#PAGES[@]}

# add the home page as last entry.
PAGES[${PAGES_TOTAL}]='home'

# go back.
cd ../out

# deploy each page to its corresponding repo.
for page in ${PAGES[*]}; do
  EXTERNAL_PATH="./out/$page"
  CURRENT_SUBMODULE=$page

  cd $CURRENT_SUBMODULE

  echo "exporting page: $page"
  export CURRENT_ITEM=$page EXTERNAL_PATH=$EXTERNAL_PATH; npm run export

  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  CURRENT_REMOTE=$(git config --get remote.origin.url)

  if [[ -z $(git status -s) ]]
  then
    echo "Nothing to push"
  else
    echo "pushing"
    echo "page: $page"
    echo "repo: $CURRENT_REMOTE"
    echo "branch: $CURRENT_BRANCH"

    git add -A .
    git commit -m "Release $RELEASE_VERSION."
    git push -q $CURRENT_REMOTE $CURRENT_BRANCH
    git pull
  fi

  cd ../
done;

# update and checkout to the default branch of each submodule.
yarn submodule:update

# pull the latest changes of each submodule.
for page in ${PAGES[*]}; do
  CURRENT_SUBMODULE=$page
  cd $CURRENT_SUBMODULE
  git pull
done;
