console.log("Hello World from NodeJS");

// data type
// nome = 'mauricio';
testobj = []
console.log(typeof nome);
console.log(typeof 10);
console.log(typeof 9.5);
console.log(typeof true);
console.log(typeof b);
b=1
console.log(typeof null);
console.log(typeof b);

{
    let nome = 'mauricio';
}
// console.log(nome);
let i;
for (i = 0; i < 10; i++) {
    console.log(i);
}
console.log('valor de i: ' + i);

let nota = '9';
console.log(typeof nota);
nota = parseInt(nota);
console.log(typeof nota);

let notaFinal = 8.1234567;
console.log(notaFinal.toFixed(2));

let nomeCompleto = new String("Mauricio Neto");
console.log(nomeCompleto);

let nomeCompleto2 = "Mauricio Neto"
console.log(nomeCompleto2);

let message = `Olá, Sr. ${nomeCompleto2}.
Este é uma possibilidade de 
uso da template string.
`;
console.log(message);

let carro = 'chevrolet';
console.log(carro.lastIndexOf('e'));
