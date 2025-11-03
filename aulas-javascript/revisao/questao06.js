const produtos = [
    { nome: "Fone de Ouvido", preco: 89.9 },
    { nome: "Teclado Mecânico", preco: 199.9 },
    { nome: "Monitor", preco: 499.9 },
    { nome: "Cabo HDMI", preco: 29.9 },
    { nome: "Mouse", preco: 100.9 },
    { nome: "Cooler", preco: 50 }
];

// a. Use filter() para selecionar apenas os produtos com preço acima de 100.

const produtosCaros = produtos.filter(function(produto){
    return produto.preco > 100;
});
console.log(produtosCaros);

// b. Utilize map() para criar um novo array com o nome e o preço após o desconto.

const produtosComDesconto = produtosCaros.map(function(produto){
    return {nome: produto.nome, preco: (produto.preco*0.9)};
})
console.log(produtosComDesconto);

// c. Exiba o resultado com forEach() no formato:
produtosComDesconto.forEach(function(produto){
    console.log(`Produto: ${produto.nome} | Novo preço R$${produto.preco}`)
})