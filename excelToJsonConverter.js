'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

function convertToJson () {
    return excelToJson({
        sourceFile: 'Saints Stats.xlsx',
        header: {
            rows: 1
        },
        columnToKey: {
            '*': '{{columnHeader}}'
        }
    });
}

function generateFileString(jsonString) {
    const declarationString = 'const stats = ';
    let jsFileString = declarationString + jsonString + ';';
    const exportString = '\n\nmodule.exports = stats;';
    jsFileString += exportString;
    return jsFileString;
}

function writeToFile () {
    const jsonObject = convertToJson();
    const jsonString = JSON.stringify(jsonObject);
    const jsFileString = generateFileString(jsonString);
    const statsFile = 'stats.js';
    fs.writeFile(statsFile, jsFileString, 'utf8', function(err) {
        if (err) {
            console.log('There was an error: ', err);
        }
    });
}

module.exports = writeToFile();
