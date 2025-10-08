// Crie um objeto chamado estoque que armazene informações sobre produtos disponíveis em uma loja Cada produto deve ter as propriedades nome, preço e quantidade. Em seguida, crie uma função chamada verificarEstoque que recebe o nome de um produto como parâmetro e retorna uma mensagem informando se o produto está disponível em estoque e quantas unidades estão disponíveis.
const prompt = require('prompt-sync')();

let estoque = [
    {nome: 'sapato', preco: 200, quantidade: 5 },
    {nome: 'camisa', preco: 100, quantidade: 16 },
    {nome: 'calça', preco: 250, quantidade: 10 },
    {nome: 'meia', preco: 15, quantidade: 32 }    
]

function verificarEstoque(nomeProduto) {
    let flag = false;
    for(let i = 0; i < estoque.length; i++) {
        if (estoque[i].nome === nomeProduto) {
            console.log(`Produto: ${nomeProduto} está no estoque.`);
            console.log(`Quantidade em estoque: ${estoque[i].quantidade}.`);
            // TODO: COLOCAR FUNCAO DE CALCULO AQUI!
            let valorTotal = calcularTotalEmEstoque(estoque[i]);
            console.log(`Valor Total em Estoque: ${valorTotal}`);
            flag = true;
        }
    }
    return flag;
}

function calcularTotalEmEstoque(produto) {
    return (produto.preco * produto.quantidade);
}

function adicionarProduto(nome, preco, quantidade) {
    //let novoProduto = {nome, preco, quantidade};
    let novoProduto = {};
    novoProduto.nome = nome;
    novoProduto.preco = preco;
    novoProduto.quantidade = quantidade;
    if (typeof preco != 'number' || typeof quantidade != 'number') {
        console.error(`Valores incompatíveis com a variável!`);
        return;
    }
    estoque.push(novoProduto);
    console.log(`Produto adicionado com sucesso.`);
    console.log(estoque);
}

// let produto = prompt('Digite o nome do produto: ');
// if (!verificarEstoque(produto.toLowerCase())) {
//     console.error(`Produto não encontrado no estoque!`);
// }

let nome = prompt('Nome do Produto: ');
let preco = parseFloat(prompt('Preco do Produto: '));
let quantidade = parseInt(prompt('Quantidade do Produto: '));
adicionarProduto(nome, preco, quantidade);
