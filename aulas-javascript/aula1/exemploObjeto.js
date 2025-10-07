// let usuario = {};
// console.log(usuario);

// usuario.nomeCompleto = 'Mauricio Neto';
// console.log(usuario);

// usuario.idade = 33;
// console.log(usuario);

const usuario = {
    nome: 'mauricio',
    idade: 33,
    isProfessor: true
}

for (att in usuario) {
    console.log(att + " = " + usuario[att]);
}

const pessoa = {
    nome: 'mauricio neto',
    idade: 35,
    profissao: 'desenvolvedor'
}

console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`);


