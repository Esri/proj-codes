# esri-proj-codes

[![npm version](https://img.shields.io/npm/v/esri-proj-codes.svg?style=flat-square)](https://www.npmjs.com/package/esri-proj-codes)
[![build status](https://img.shields.io/travis/Esri/esri-proj-codes.svg?style=flat-square)](https://travis-ci.org/Esri/esri-proj-codes)

This module provides a method for looking up information about the Coordinate Reference Systems (CRS) shipped with ArcGIS.

Provide a Well Known ID (WKID) to the `lookup()` method and the CRS Name and Well Known Text (WKT) will be returned.

##  Usage

```
npm install esri-proj-codes
```

Then require the module, call the `lookup` method and pass in your well known id of choice.

```js
var codes = require('esri-proj-codes')

var projInfo = codes.lookup(3857)

projInfo.name
// 'WGS_1984_Web_Mercator_Auxiliary_Sphere'

projInfo.wkt
// PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984"...

// or
codes.lookup(3857).name
// 'WGS_1984_Web_Mercator_Auxiliary_Sphere'
```

To minimize file size in the browser or overall memory consumed you can also require collections individually

```js
require('esri-proj-codes/geographic.json')

require('esri-proj-codes/projected.json') // lots of these
require('esri-proj-codes/vertical.json')

// equation-based and grid-based transformations are grouped
require('esri-proj-codes/transformations.json')
require('esri-proj-codes/vertical-transformations.json')
```

## Source

The codes included in this module are scraped from the documentation below.

* [Projected coordinate systems](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Projected_coordinate_systems/02r3000000vt000000/)
* [Geographic coordinate systems](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Geographic_coordinate_systems/02r300000105000000/)
* [Vertical coordinate systems](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Vertical_coordinate_systems/02r3000000rn000000/)
* [Datum transformations](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Datum_transformations/02r3000000r8000000/)
* [Grid-based datum transformations](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Grid_based_datum_transformations/02r30000029z000000/)

## Resources

* [Using spatial references](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Using_spatial_references/02r3000000qq000000/)
* [ArcGIS for Developers](http://developers.arcgis.com)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an [issue](https://github.com/Esri/esri-proj-codes/issues).

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing).

## Licensing

Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./license.txt) file.