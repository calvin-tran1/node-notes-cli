const fs = require('fs');

const dataJSON = require('./data.json');

let id = fs.nextId;
let notes = fs.notes;

const note = process.argv[3];
// dataJSON.notes = note;
const jsonFormat = JSON.stringify(dataJSON, null, 2);
const operator = process.argv[2];

fs.writeFile('data.json', jsonFormat, err => {
  if (err) {
    console.error(err);
  }
  // console.log(process.argv[2]);
  if (operator === 'read') {
    console.log(dataJSON);
  }
})
