/*
  Copyright 2015 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

var test = require('tape'),
 codes = require('../')

test('lookup project codes', function (t) {
  t.plan(4)

  // projected codes
  var proj = codes.lookup(3857)
  t.equal(proj.name, 'WGS_1984_Web_Mercator_Auxiliary_Sphere')

  // geographic codes
  proj = codes.lookup(3819)
  t.equal(proj.name, 'GCS_HD1909')

  // vertical code
  proj = codes.lookup(6359)
  t.equal(proj.name, 'NGVD29_depth')

  // undefined proj code
  proj = codes.lookup(3333333)
  t.equal(proj, undefined)
})
