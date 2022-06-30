const fs = require('fs');
const data = require('./data.json');
const operator = process.argv[2];
const note = process.argv[3];
// const jsonFormat = JSON.stringify(newEntry(), null, 2);
let newEntryId = data.nextId;
let notes = data.notes;
const jsonFormat = JSON.stringify(data, null, 2);


console.log(jsonFormat)

if (operator === 'read') {
  console.log(data.notes);
}
if (operator === 'create') {
  data.notes[`${newEntryId}`] = note;
  fs.writeFile('data.json', jsonFormat, err => {
    if (err) {
      console.error(err);
    }
    })
  data.nextId++
}

console.log(notes)
console.log(data)
// fs.writeFile('data.json', jsonFormat, err => {
//   if (err) {
//     console.error(err);
//   }
  // console.log(process.argv[2]);
  // if (operator === 'read') {
  //   console.log(data.notes);
  // } else if (operator === 'create') {

  //   data.nextId = newEntryId++;
  // }
})

// if (operator === 'read') {
//   console.log(data.notes);
// } else if (operator === 'create') {

//   data.nextId = newEntryId++;
// }
// console.log(data.notes);
