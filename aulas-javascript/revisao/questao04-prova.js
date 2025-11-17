const produtos = [
{"id": 101, "nome": "Smartphone X", "preco": 3500.00, "categoria": "Eletronicos"},
{"id": 102, "nome": "Camisa Polo", "preco": 120.00, "categoria": "Vestuário"},
{"id": 103, "nome": "Notebook Pro", "preco": 7200.00, "categoria": "Eletronicos"},
{"id": 104, "nome": "Tênis de Corrida", "preco": 350.00, "categoria": "Calçados"},
{"id": 105, "nome": "Fone de Ouvido BT", "preco": 850.00, "categoria": "Eletronicos"}
]

// 1. Gere um novo array contendo somente os produtos da categoria “Eletronicos” (use o método filter).
const produtosEletronicos = produtos.filter(prod => prod.categoria === "Eletronicos");
console.log(produtosEletronicos);

// 2. Gere um novo array contendo o nome do produto e um novo campo precoComDesconto, que deve ser 10% menor que o preço original (use o método map).
const novosProdutosDesconto = produtosEletronicos.map((prod) => {
    // return [...produtosEletronicos]
    return {nome: prod.nome, produtoComDesconto: prod.preco * 0.9};
});
console.log(novosProdutosDesconto);