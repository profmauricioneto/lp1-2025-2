let idades = [33, 12, 32, 15, 8, 9, 54, 76];

// let adultos = idades.filter(function(idade){
//     return idade >= 18;
// })
function verificarAdulto(idade) {
    return idade >= 18;
}

let adultos = idades.filter(verificarAdulto)

console.log(adultos);
