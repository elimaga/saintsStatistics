'use strict';
const excelToJson = require('convert-excel-to-json');

function convertToJson () {
    const result = excelToJson({
        sourceFile: 'Saints Stats.xlsx',
        columnToKey: {
            '*': '{{columnHeader}}'
        }
    });
    console.log('this is the stats', result);
}

module.exports = convertToJson();