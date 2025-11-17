const dadosComentarios = [
  { id: 1, texto: "Ótimo post!", numeroDeLikes: "50" },
  { id: 2, texto: "Não concordo...", numeroDeLikes: "8" },
  { id: 3, texto: "Interessante, mas PODE MELHORAR.", numeroDeLikes: "15" },
  { id: 4, texto: "Primeiro a comentar!", numeroDeLikes: "3" },
  { id: 5, texto: "Isso é INCRÍVEL", numeroDeLikes: "120" },
];

// a. Crie um novo array que para cada objeto de comentário, o campo numeroDeLikes (que é uma string) deve ser convertido para o tipo number. Os outros campos (id e texto) devem ser mantidos no novo objeto (use o método map).

// b. Crie um novo array que filtre o array do item a para criar um array final. Este array deve conter apenas os comentários que possuem numeroDeLikes maior ou igual a 10.

function encontrarComentariosPopulares(comentarios) {
    const comentariosProcessados = comentarios.map((comentario) => {
        return {id: comentario.id, nome: comentario.texto, numeroDeLikes: parseInt(comentario.numeroDeLikes)};
    }).filter((comentario) => comentario.numeroDeLikes >= 10);

    return comentariosProcessados
}

let resultado = encontrarComentariosPopulares(dadosComentarios);
console.log(resultado);
