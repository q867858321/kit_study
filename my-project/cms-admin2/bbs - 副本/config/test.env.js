'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  Base_URL:'"http://192.168.0.173:8007/jeebbs5"'
})
