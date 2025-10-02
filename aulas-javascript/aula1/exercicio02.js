const prompt = require('prompt-sync')();

let value = parseInt(prompt('Digite um valor inteiro: '));

if (value % 2 === 0) {
    console.log(`${value} é par.`);
} else {
    console.log(`${value} é ímpar.`);
}

let result = (value % 2 === 0) ? `${value} é par.` : `${value} é ímpar.`;
console.log(result);

