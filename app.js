const fs = require('fs');
const genders =  ['m','f'];
const maleNames = ['Alex','Jon','Pawel'];
const femaleNames = ['Ann','Zosia','Ela'];
const maleLastNames = ['Nilson','Palikowski','Szulc'];
const femaleLastNames = ['Anderson','Kowalenko'];
const age = [25,38,65,12,11];
let people = [];

const randChoice = (arr)=>{
  return arr[Math.floor(Math.random()*arr.length)];
}

for(let i = 0; i < 20; i++) {
  let points = {};
  switch(randChoice(genders)) {
    case 'm':
      points.names = randChoice(maleNames);
      points.lastName = randChoice(maleLastNames);
      points.age = randChoice(age);
      break;
    case 'f':
      points.names = randChoice(femaleNames);
      points.lastName = randChoice(femaleLastNames);
      points.age = randChoice(age);
      break;
    default:

  }
  people.push(points)


}
const peopleJSON = JSON.stringify(people);
fs.writeFile('outputfile.txt', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
