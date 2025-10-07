const prompt = require('prompt-sync')();

const valorMin = parseInt(prompt('Valor Mínimo: '));const valorMax = parseInt(prompt('Valor Máximo: '));

console.log("Valores Pares: ");
for(let i = valorMin; i <= valorMax; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}