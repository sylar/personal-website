const getConfig = require('next/config')
const {
  publicRuntimeConfig: { NODE_ENV }
} = getConfig()
const { envVars } = require('../lib/constants')

const isDev = function () {
  return NODE_ENV === envVars.DEVELOPMENT
}
const isTest = function () {
  return NODE_ENV === envVars.TESTING
}
const isProd = function () {
  return NODE_ENV === envVars.PRODUCTION
}

export { isDev, isTest, isProd }
