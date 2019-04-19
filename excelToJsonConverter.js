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
    let jsFileString = 'const stats = ' + jsonString + ';';
    jsFileString += '\n\nmodule.exports = stats;';
    fs.writeFile('stats.js', jsFileString, 'utf8', function(err) {
        if (err) {
            console.log('There was an error: ', err);
        }
    });
}

module.exports = writeToFile();