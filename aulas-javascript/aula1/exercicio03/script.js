function comparadorDeValores() {
    let valor1 = parseInt(document.getElementById('valor1').value);
    console.log(valor1);
    
    let valor2 = parseInt(document.getElementById('valor2').value);
    console.log(valor2);
    
    let resultado = document.getElementById('resultado');
    let maior = '';

    if (valor1 > valor2) {
        maior = `${valor1} é maior.`;
    } else if (valor1 < valor2) {
        maior = `${valor2} é maior.`;
    } else {
        maior = `${valor1} e ${valor2} são iguais.`;
    }

    resultado.textContent = maior;  
}

// let botao = document.getElementById('meu-botao');
// console.log(botao);

// botao.addEventListener('click',comparadorDeValores)