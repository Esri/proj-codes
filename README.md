# esri-proj-codes

[![npm version](https://img.shields.io/npm/v/esri-proj-codes.svg?style=flat-square)](https://www.npmjs.com/package/esri-proj-codes)
[![build status](https://img.shields.io/travis/Esri/esri-proj-codes.svg?style=flat-square)](https://travis-ci.org/Esri/esri-proj-codes)

This module provides a method for looking up Well Known Text (WKT) representations of various projections. A projection can be found by providing an Esri projection code, and will result in the projection name and WKT being returned.

##  Usage

```
npm install esri-proj-codes
```

Then require the module and call the `lookup` method and pass in your projection code of choice

```js
var codes = require('esri-proj-codes')
var projInfo = codes.lookup('3857')
```

You might also want the data from each projection code set separately, to minimize file size in the browser or to reduce memory usage. You can require each of the sets directly

```js
var projected = require('esri-proj-codes/projected.json')
var geographic = require('esri-proj-codes/geographic.json')
var vertical = require('esri-proj-codes/vertical.json')
```

## Source

There are three sets of projection codes included in this module.

* [Projected Projection Codes](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Projected_coordinate_systems/02r3000000vt000000/)
* [Geographic Projection Codes](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Geographic_coordinate_systems/02r300000105000000/)
* [Vertical Projection Codes](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Vertical_coordinate_systems/02r3000000rn000000/)

## Resources

* [Using spatial references](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Using_spatial_references/02r3000000qq000000/)
* [ArcGIS for Developers](http://developers.arcgis.com)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an [issue](https://github.com/Esri/esri-proj-codes/issues).

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing).

## Licensing

Copyright 2015 Esri

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

[](Esri Tags: ArcGIS Web Mapping Projections)
[](Esri Language: JavaScript)
