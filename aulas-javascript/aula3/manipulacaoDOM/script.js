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

// ação de completar ou não uma tarefa
let items = document.getElementsByClassName('task-item');
for(let i = 0; i < items.length; i++) {
    // console.log(items[i].textContent);
    items[i].addEventListener('click', () => {
        if (items[i].classList.contains('completed')) {
            items[i].classList.remove('completed');
        } else {
            items[i].classList.add('completed');
        }
    });
}

// capturar entrada de dados
let botaoSubmit = document.querySelector('[type=submit]');
console.log(botaoSubmit);
botaoSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let inputText = document.querySelector('#task-input').value;
    console.log(inputText);

    let item = document.createElement('li');
    item.classList.add('task-item');
    item.textContent = inputText;

    console.log(item);
    
    document.querySelector('#task-input').value = "";
})