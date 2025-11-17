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