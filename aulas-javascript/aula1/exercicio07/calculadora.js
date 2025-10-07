const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt('Valor 1: '));
let valor2 = parseFloat(prompt('Valor 2: '));
let operacao = prompt('Escolha operação +, -, *, /: ');

function validarDados(numero) {
    if (typeof numero === 'number') {
        return true;
    }
    return false;
}

function calculadoraSimples(valor1, valor2, operacao) {
    if (validarDados(valor1) && validarDados(valor2)) {
        console.error('Entrada de dados não numéricos.');
        return;
    }
    let resultado = -1;
    switch(operacao) {
        case '+': {
            resultado = valor1 + valor2;
            return resultado;
        }
        case '-': {
            resultado = valor1 - valor2;
            return resultado;
        }
        case '*': {
            resultado = valor1 * valor2;
            return resultado;
        }
        case '/': {
            try {
                resultado = valor1/valor2;
            } catch(err) {
                console.error(err);
            }
            return resultado;
        }
        default: {
            console.error('operação inválida.');
            return resultado;
        }
    }
}

console.log(calculadoraSimples(valor1, valor2, operacao).toFixed(2));