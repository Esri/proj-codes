var projectedCodes = require('./projected.json')
var geographicCodes = require('./geographic.json')
var verticalCodes = require('./vertical.json')
var transformationCodes = require('./transformations.json')
var verticalTransformationCodes = require('./vertical-transformations.json')

exports.lookup = function (code) {
  return projectedCodes[code] || geographicCodes[code] || verticalCodes[code] || transformationCodes[code] || verticalTransformationCodes[code]
}
