const prompt = require('prompt-sync')();

let valor = parseInt(prompt('Digita um valor inteiro: '));

let resultado = (valor >= 0) ? `${valor}: sinal (+) ` : `${valor}: sinal (-)`;

console.log(resultado);
