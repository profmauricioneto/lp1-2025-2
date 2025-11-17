//  Um professor precisa calcular as médias das notas de seus alunos. O array contém as notas de uma turma, e ele deseja transformar cada nota aplicando um bônus de 0.5, sem ultrapassar o valor máximo de 10. 
// a. Critério: utilize o método map

const notas = [7.5, 8.0, 9.8, 6.4, 5.9];

const notasComBonus = notas.map((nota) => {
    return (nota + 0.5) > 10 ? 10 : (nota + 0.5);
    // if ((nota + 0.5) > 10) {
    //     return 10;
    // } else {
    //     return nota+0.5
    // }
});

console.log(notasComBonus);
