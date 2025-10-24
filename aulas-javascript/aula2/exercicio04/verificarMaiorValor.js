let valoresInteiros = [1,2,3,4,5,6,7,8];

function encontrarMaiorValor(arr) {
    let resultado = arr.reduce(function(acc, atual) {
        return (acc > atual)? acc : atual; 
    }, arr[0])
    return resultado;
}

console.log(encontrarMaiorValor(valoresInteiros));
