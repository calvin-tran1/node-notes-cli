const fs = require('fs');

const dataJSON = require('./data.json');

let id = dataJSON.nextId;
let notes = dataJSON.notes;


const operator = process.argv[2];
const note = process.argv[3];
// dataJSON.notes = note;
const jsonFormat = JSON.stringify(dataJSON, null, 2);
const newEntryId = dataJSON.nextId;
console.log(newEntryId)

let newNoteEntry = dataJSON.notes.newEntryId;
dataJSON.notes[`${newEntryId}`] = 'string'
console.log(dataJSON.notes)

fs.writeFile('./data.json', jsonFormat, err => {
  if (err) {
    console.error(err);
  }
  // console.log(process.argv[2]);
  if (operator === 'read') {
    console.log(dataJSON.notes);
  } else if (operator === 'create' && note === dataJSON) {

  }
})
