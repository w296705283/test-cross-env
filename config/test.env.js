'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"',
  ENV_CONFIG: '"testEnv"',
  BASE_URL: '"localhost:8082/test"'
})
