// function alterarTitulo() {
//     let titulo = document.getElementById('titulo');
//     titulo.textContent = 'Vejo que você clicou!'
// }

// Açao de mudar o tema - toggle.
function mudarTema() {
    let body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode')
    } else {
        body.classList.add('dark-mode');
    }
} 

// capturar entrada de dados
let botaoSubmit = document.querySelector('[type=submit]'); // referencia do botão
botaoSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let inputText = document.querySelector('#task-input').value; // capturar texto de entrada do usuario

    // criar um elemento li e manipula-lo
    let item = document.createElement('li');
    item.classList.add('task-item');
    item.textContent = inputText;
    let botao = document.createElement('button');
    botao.textContent = 'completar';

    // adicionar a funcao de toggle ao botao
    botao.onclick = () => toggleCompleted(item);
    item.appendChild(botao);

    // pegar a referencia da lista e adicionar o item criado.
    let listItem = document.querySelector('#task-list');
    listItem.appendChild(item);
    
    // limpar o campo de entrada de dados
    // document.querySelector('#task-input').value = "";
    let form = document.querySelector('#task-form');
    form.reset();
});

// ação de completar ou não uma tarefa
// let items = document.getElementsByClassName('btn-completed');
// console.log(items);
// for(let i = 0; i < items.length; i++) {
//     items[i] = function ('click', () => {    
//         if (items[i].classList.contains('completed')) {
//             items[i].classList.remove('completed');
//         } else {
//             items[i].classList.add('completed');
//         }
//     });
// }

function toggleCompleted(item) {
    if (item.classList.contains('completed')) {
        item.classList.remove('completed');
    } else {
        item.classList.add('completed');
    }

}