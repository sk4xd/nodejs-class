const fs = require('fs');

// const book = {
//     author: 'Shakespeare',
//     body: 'Some poetry made by the author'
// } 

// const abook = JSON.stringify(book);
// fs.writeFileSync('1-json.json', abook);
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author)

const sampleBuffer = fs.readFileSync('1-json.json')
const sampleJSON = sampleBuffer.toString();
const sampleData = JSON.parse(sampleJSON);
sampleData.name = 'HUEHUE';
sampleData.planet = 'Mars';
sampleData.age = 28;
const verifySample = JSON.stringify(sampleData);
fs.writeFileSync('1-json.json', verifySample);
console.log(verifySample)
