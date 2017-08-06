#  constantinescu.io

[![Greenkeeper badge](https://badges.greenkeeper.io/andreiconstantinescu/constantinescu.io.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/andreiconstantinescu/constantinescu.io.svg?branch=master)](https://travis-ci.org/andreiconstantinescu/constantinescu.io)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Description
My personal static website built with next.js. In order to make use of Github's routing and hosting capabilities and still not intefere with the routing already put in place, each page of this project is deployed to a different repository in order to use all the goodies offered by Github.

# To run

In development mode:
```
yarn
yarn dev
```

In production mode:
```
yarn build
yarn start
```

ESlint and Flow:
```
yarn test
```

Flow coverage:
```
yarn flow-coverage
open coverage/flow-coverage-report/index.html
```

The deployment:
```
yarn deploy
```

# License
[MIT](LICENSE.txt).
