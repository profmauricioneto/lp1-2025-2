let btnAdicionar = document.querySelector('.btn-enviar');
btnAdicionar.addEventListener('click', (e) => {
    e.preventDefault();
    let linguagem = document.getElementById('linguagem').value;
    let nivel = document.getElementById('nivel').value;

    if (!nivel || !linguagem) {
        alert('Campos obrigatórios não inseridos.');
        return;
    }

    let values = [linguagem, nivel];

    console.log(`valor: ${linguagem}`);
    console.log(`valor: ${nivel}`);
    
    let tbody = document.querySelector('tbody');
    let linha = document.createElement('tr');

    for (let i = 0; i < 2; i++) {
        let td = document.createElement('td');
        td.textContent = values[i];
        linha.appendChild(td);
    }
    tbody.appendChild(linha);

    document.querySelector('form').reset();
});