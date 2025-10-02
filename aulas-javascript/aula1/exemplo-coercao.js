const prompt = require('prompt-sync')();

// console.log(3 + "5" + 8);

// console.log(5 + 3 + "7");

let idade = prompt('Digite sua idade: ');
let isAdult = (idade >= 18) ? true : false;

console.log(isAdult);

