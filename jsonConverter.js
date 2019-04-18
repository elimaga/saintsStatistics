'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

function convertToJson () {
    return excelToJson({
        sourceFile: 'Saints Stats.xlsx',
        columnToKey: {
            '*': '{{columnHeader}}'
        }
    });
}

function writeToFile () {
    const jsonObject = convertToJson();
    const jsonString = JSON.stringify(jsonObject);
    fs.writeFile('stats.json', jsonString, 'utf8', function(err) {
        if (err){
            console.log('There was an error: ', err);
        }
    });
}

module.exports = writeToFile();