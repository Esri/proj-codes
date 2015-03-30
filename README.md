# esri-proj-codes

##  Usage

Basic installation would occur within an existing or new node.js project like so

  ```
  npm install esri-proj-codes
  ```

Then to use this module you would require it and call the `lookup` method with a given proj code

  ```
  var codes = require('esri-proj-codes')
  var projInfo = codes.lookup('3857')
  ```

## Source 

There are 3 sets of projection codes includes in this module. 

* [Projected Projection Codes](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Projected_coordinate_systems/02r3000000vt000000/)
* [Geographic Projection Codes](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Geographic_coordinate_systems/02r300000105000000/)
* [Vertical Projection Codes](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Vertical_coordinate_systems/02r3000000rn000000/)  

## Resources

* [ArcGIS REST API Documentation](http://resources.arcgis.com/en/help/arcgis-rest-api/)
* [ArcGIS for Developers](http://developers.arcgis.com)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an [issue](https://github.com/Esri/esri-proj-codes/issues).

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing).

## Licensing

Copyright 2014 Esri

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
