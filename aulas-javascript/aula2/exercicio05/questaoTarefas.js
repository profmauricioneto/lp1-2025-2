const tarefas = require('./tarefas.json');

function obterTitulosTarefasConcluidas(tarefas) {
    return tarefas.filter((tarefa) => {
        return tarefa.concluido === true
    })
}

let tarefasConcluidas = obterTitulosTarefasConcluidas(tarefas);
console.log(tarefasConcluidas);

const tarefasConcluidasJSON = JSON.stringify(tarefasConcluidas);
console.log(tarefasConcluidasJSON);
