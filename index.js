var projectedCodes = require('./projected.json')
var geographicCodes = require('./geographic.json')
var verticalCodes = require('./vertical.json')
var transformationCodes = require('./transformations.json')
var verticalTransformationCodes = require('./vertical-transformations.json')

exports.lookup = function (code) {
  // if an outdated web mercator code is passed in, substitute the correct one
  if (code === 102100 || code === '102100') {
    return projectedCodes[3857]
  } else {
    return projectedCodes[code] || geographicCodes[code] || verticalCodes[code] || transformationCodes[code] || verticalTransformationCodes[code]
  }
}
