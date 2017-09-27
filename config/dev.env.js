var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOVIES_URL: `"${process.env.MOVIES_URL}"`,
  API_KEY: `"${process.env.API_KEY}"`
})
