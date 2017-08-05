#!/bin/bash
# change directory to pages
cd pages

# get all the available pages
PAGES=($(ls -d */ | cut -f1 -d'/'))
PAGES_TOTAL=${#PAGES[@]}

# add the home page as last entry
PAGES[${PAGES_TOTAL}]='home'

# go back
cd ../out

for page in ${PAGES[*]}; do
  EXTERNAL_PATH="./out/$page"
  CURRENT_SUBMODULE=$page

  cd $CURRENT_SUBMODULE

  echo "exporting page: $page"
  export CURRENT_ITEM=$page EXTERNAL_PATH=$EXTERNAL_PATH; yarn export


  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  CURRENT_REMOTE=$(git remote get-url origin)

  if [[ -z $(git status -s) ]]
  then
    echo "Nothing to push"
  else
    echo "pushing"
    echo "page: $page"
    echo "repo: $CURRENT_REMOTE"
    echo "branch: $CURRENT_BRANCH"

    git add .
    git commit -m "Release $RELEASE_VERSION."
    git push $CURRENT_REMOTE $CURRENT_BRANCH;
  fi

  cd ../
done;
