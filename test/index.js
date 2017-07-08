var test = require('tape'),
 codes = require('../')

test('lookup project codes', function (t) {
  t.plan(6)

  // projected codes
  var proj = codes.lookup(3857)
  t.equal(proj.name, 'WGS_1984_Web_Mercator_Auxiliary_Sphere')

  // geographic codes
  proj = codes.lookup(3819)
  t.equal(proj.name, 'GCS_HD1909')

  // vertical code
  proj = codes.lookup(6359)
  t.equal(proj.name, 'NGVD29_depth')

  // transformation code
  proj = codes.lookup(1226)
  t.equal(proj.name, 'Schwarzeck_To_WGS_1984')

  // vertical transformation code
  proj = codes.lookup(110043)
  t.equal(proj.name, 'NGVD29_To_NAVD88_USFT_HARN_ECW')

  // undefined proj code
  proj = codes.lookup(3333333)
  t.equal(proj, undefined)
})
