let valores = [1,2,3,4,5,6,7,8,9,10];

// function calcularTotalPares(numeros) {
//     let somatorio = 0;
//     const pares = numeros.filter(function(ehpar){
//         return ehpar % 2 === 0;
//     })
//     pares.forEach(function(numeroPar){
//         somatorio += numeroPar;
//     });
//     return somatorio;
// }

function calcularTotalPares(numeros) {
    let somatorio = 0;
    const pares = numeros.filter(function(ehpar){
        return ehpar % 2 === 0;
    }).forEach(function(numeroPar){
        somatorio += numeroPar;
    });
    return somatorio;
}

console.log(calcularTotalPares(valores))

// function selecionarNumerosPares(numeros) {
//     const pares = numeros.filter(function(ehpar){
//         return ehpar % 2 === 0;
//     })
//     return pares;
// }

// function selecionarNumerosPares(numeros) {
//     return numeros.filter(function(ehpar){
//         return ehpar % 2 === 0;
//     })
// }

// console.log(selecionarNumerosPares(valores));