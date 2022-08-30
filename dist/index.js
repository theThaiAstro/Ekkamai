
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ekkamai.cjs.production.min.js')
} else {
  module.exports = require('./ekkamai.cjs.development.js')
}
