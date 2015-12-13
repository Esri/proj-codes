var projectedCodes = require('./lib/projected.json')
var geographicCodes = require('./lib/geographic.json')
var verticalCodes = require('./lib/vertical.json')

exports.lookup = function (code) {
  return projectedCodes[code] || geographicCodes[code] || verticalCodes[code]
}
