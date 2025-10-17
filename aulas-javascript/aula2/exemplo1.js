let linguagens = ["javascript", "java"];
linguagens.push("C");
console.log(linguagens);

// linguagens.shift();
linguagens.pop();
console.log(linguagens);

let frutas = ['maça', 'banana', 'açai', 'laranja'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let fruta of frutas) {
//     console.log(fruta);
// }

frutas.forEach(function(fruta) {
    console.log('neste array tem: ' + fruta);
});