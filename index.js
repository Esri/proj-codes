var projectedCodes = require('./projected.json')
var geographicCodes = require('./geographic.json')
var verticalCodes = require('./vertical.json')

exports.lookup = function (code) {
  return projectedCodes[code] || geographicCodes[code] || verticalCodes[code]
}
