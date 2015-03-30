/*
  Copyright © 1995-2015 Esri. All rights reserved.
*/

var fs = require('fs')

var projectedCodes = JSON.parse(fs.readFileSync(__dirname + '/lib/projected.json'))
var geographicCodes = JSON.parse(fs.readFileSync(__dirname + '/lib/geographic.json'))
var verticalCodes = JSON.parse(fs.readFileSync(__dirname + '/lib/vertical.json'))

exports.lookup = function (code) {
  return projectedCodes[code] || geographicCodes[code] || verticalCodes[code]
}
