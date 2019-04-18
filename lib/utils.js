const getConfig = require('next/config')
const { NODE_ENV } = process.env
const { envVars } = require('../lib/constants')

const isDev = function() {
  return NODE_ENV === envVars.DEVELOPMENT
}
const isTest = function() {
  return NODE_ENV === envVars.TESTING
}
const isProd = function() {
  return NODE_ENV === envVars.PRODUCTION
}

export { isDev, isTest, isProd }
