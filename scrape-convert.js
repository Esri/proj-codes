/*
  this script assumes that you've already copy/pasted new projection codes from the online doc into .csvs and given them the same names as your output json
*/
const csv = require('csvtojson')
const fs = require('fs')

const projectionCodes = ['geographic', 'projected', 'vertical', 'transformations', 'vertical-transformations']

projectionCodes.forEach(function (scrapedFile) {
  var sortedOutput = {}
  /* from http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Geographic_coordinate_systems/02r300000105000000/
  csv file syntax
  4326,WGS84,84wktstring
  6666,WGS6666,666wktstring
  */
  csv({ noheader: true })
  .fromFile(scrapedFile + '.csv')
  .on('json', function (jsonObj) {
    sortedOutput[jsonObj.field1] = {
    name: jsonObj.field2,
    wkt: jsonObj.field3
    }
  })
  .on('done', (error)=> {
    if (!error) {
      fs.writeFile(scrapedFile + '.json', JSON.stringify(sortedOutput), 'utf8', () => console.log(`wrote ${scrapedFile}.json`))
    }
  })
})
