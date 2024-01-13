// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Vasu';
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// const result = generateError('An error occurred', 500);
// console.log(result);

let appId = 'vas';
const button = document.querySelector('button')!;

// function add(n1: number, n2: number) {
//   if (n1 + n2 > 0) {
//     return n1 + n2;
//   }
//   return;
// }

function clickHandler(message: string) {
  // let userName = 'Vas';
  console.log('Clicked!' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'You are ready!'));
}
// this comment will not be compiled
