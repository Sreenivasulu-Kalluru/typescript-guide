// Code goes here!
// const userName = 'Vasu';
// userName = 'Remo'
// let age = 21;

// age = 22;
// var result;

// function add(a: number, b: number) {
//   // var result;
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result)

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = (output) =>
// console.log(output);

// const button = document.querySelector('button');

// if (button) {
// button.addEventListener('click', (event) => console.log(event));
// }

// printOutput(add(5, 3));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
// console.log(activeHobbies);

const person = {
  firstName: 'Vasu',
  age: 21,
};

const copiedPerson = { ...person };
// console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3, 7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
