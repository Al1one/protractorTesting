const XLSX = require('xlsx');

const workbook = XLSX.readFile('test.xlsx');

let first_sheet_name = workbook.SheetNames[0];

let address_of_cell = 'A1';

let worksheet = workbook.Sheets[first_sheet_name];

let desired_cell = worksheet[address_of_cell];

let desired_value = desired_cell.v;

console.log(desired_value);
