var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var {
    spreadsheetKey
} = require('./common');
var doc = new GoogleSpreadsheet(spreadsheetKey);
var sheet;

function setAuth() {
    return new Promise((resolve, reject) => {
        let creds = require('./Credentials.json');
        doc.useServiceAccountAuth(creds, function (err) {
            console.log('err', err);
            if (!err) {
                resolve(creds);
            } else {
                reject(creds);
            }
        });
    })
}

function getInfoSheet() {
    return new Promise((resolve, reject) => {
        doc.getInfo(function (err, info) {
            sheet = info.worksheets[2];
            sheet.resize({
                rowCount: 50,
                colCount: 10
            }); //async
            console.log(err,sheet);
            if (!err) {
                resolve(sheet);
            }
            reject(info);
        })
    })
}

function workingWithRows() {
    // google provides some query options
    return new Promise((resolve, reject) => {
        sheet.getRows({
            offset: 1,
            limit: 20,
            orderby: 'col1'
        }, function (err, rows) {
            //  console.log('Read ' +rows);
            console.log(err, rows);
            if(err) 
                reject(rows);    
            resolve(rows);
        });
    })
}

function workingWithCells() {
    console.log('ok');
    return new Promise((resolve, reject) => {
        sheet.getCells({
            'min-row': 1,
            'max-row': 2,
            'return-empty': true
        }, function (err, cells) {
            console.log(cells);
            var cell = cells[0];
            console.log(err, 'Cell R' + cell.row + 'C' + cell.col + ' = ' + cells.value);

            // cells have a value, numericValue, and formula
            cell.value == '1'
            cell.numericValue == 1;
            cell.formula == '=ROW()';

            // updating `value` is "smart" and generally handles things for you
            cell.value = 123;
            // cell.value = '=A1+B2'
            cell.save(); //async

            // // bulk updates make it easy to update many cells at once
            // cells[0].value = 1;
            // cells[1].value = 2;
            // cells[2].formula = '=A1+B1';
            sheet.bulkUpdateCells(cells); //async
            if(err) reject(cells);
            resolve(cells);
        });
    })
}
function resizeSheets() {
    return new Promise((resolve, reject)=>{
        sheet.resize({
            rowCount: 50,
            colCount: 10
        }); //async
        
    })
}
function managingSheets() {
   return new Promise(()=>{
        doc.addWorksheet({
            title: 'my new sheet'
        }, function (err, sheet) {

            // change a sheet's title
            sheet.setTitle('new title'); //async

            //resize a sheet

        });
   })
}
function addRowSheets() {
    return new Promise(()=>{
        sheet.addRow({
            'name' : 'jonh',
            'age' : 14,
            'phone' : '0234245353421',
            'addess' : 'no address'
        }, (err, row)=>{
            console.log(err, row);
        })
    })
}
function setHeaders () {
    return new Promise ((resolve, reject)=>{
        sheet.setHeaderRow(['name', 'age', 'phone', 'address'], function(err){
            console.log('errHeader', err);
        }); //async
    })
}


async function exec() {
    let result = await setAuth();
    console.log('1');
    let sheet = await getInfoSheet();
    console.log('2');
    let row = await workingWithRows();
    console.log('3');
    let cell = await workingWithCells();
    console.log('4');
    // let header = await setHeaders();
    // let createSheet = await managingSheets();

    // let addRow = await addRowSheets();

}

// exec();



const RestCore = require('rest-core');

const server = new RestCore(__dirname);

server.start();