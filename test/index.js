var test = require('tape'),
 codes = require('../')

test('lookup project codes', function (t) {
  t.plan(4)

  // projected codes
  var proj = codes.lookup(3857)
  t.equal(proj.name, 'WGS_1984_Web_Mercator_Auxiliary_Sphere')

  // // geographic codes
  proj = codes.lookup(3819)
  t.equal(proj.name, 'GCS_HD1909')

  // vertical code
  proj = codes.lookup(6359)
  t.equal(proj.name, 'NGVD29_depth')

  // undefined proj code
  proj = codes.lookup(3333333)
  t.equal(proj, undefined)
})
