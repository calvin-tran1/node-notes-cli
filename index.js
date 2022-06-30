const fs = require('fs');
let id = fs.nextId;
let notes = fs.notes;

console.log(id)
console.log(notes)

const note = process.argv[3];
const operator = process.argv[2];

console.log(process.argv[2])
console.log(process.argv[3])

fs.writeFile('data.json', JSON.stringify(note, null, 2), 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(process.argv[2])
  // if (operator === 'read') {
  // }
})
