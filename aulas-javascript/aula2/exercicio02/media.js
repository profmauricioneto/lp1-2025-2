const prompt = require('prompt-sync')();

let notas = [];
for(let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno[${i + 1}]: `));
    notas.push(nota);
}
console.log(notas);

let soma = 0;
notas.forEach(function(notaAtual) {
    soma += notaAtual;
})
console.log(soma);

let media = soma/notas.length;
console.log(`A média da turma é: ${media}`);
