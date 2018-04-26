/* Copyright (c) 2015 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* global define */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.esriProjCodes = {})))
}(this, function (exports) {
  'use strict'

  var projectedCodes = require('./projected.json')
  var geographicCodes = require('./geographic.json')
  var verticalCodes = require('./vertical.json')
  var transformationCodes = require('./transformations.json')
  var verticalTransformationCodes = require('./vertical-transformations.json')

  function lookup (code) {
    // if an outdated web mercator code is passed in, substitute the correct one
    if (code === 102100 || code === '102100') {
      return projectedCodes[3857]
    } else {
      return projectedCodes[code] || geographicCodes[code] || verticalCodes[code] || transformationCodes[code] || verticalTransformationCodes[code]
    }
  }
  exports.lookup = lookup

  Object.defineProperty(exports, '__esModule', { value: true })
}))
