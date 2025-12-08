let btnEnviar = document.querySelector('[type=submit]');

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    let nomePokemon = document.getElementById('nome-carta').value;
    let preco = document.getElementById('preco-carta').value;
    let descricao = document.getElementById('descricao-carta').value;
    let imagePokemon = document.querySelector('[type=file]');
    console.log(imagePokemon);
    

    if (!preco || !nomePokemon || !descricao) {
        alert('Campos obrigatórios vazios!');
        return;
    }

    let divCarta = document.createElement('div');
    divCarta.classList.add('carta');

    let image = document.createElement('img');
    image.src = URL.createObjectURL(imagePokemon.files[0]);

    let titulo = document.createElement('h3');
    titulo.textContent = nomePokemon;

    let elemDescricao = document.createElement('p');
    elemDescricao.classList.add('descricao');
    elemDescricao.textContent = descricao;

    let elemPreco = document.createElement('p');
    elemPreco.textContent = `R$: ${preco}`;

    divCarta.appendChild(image);
    divCarta.appendChild(titulo);
    divCarta.appendChild(elemDescricao);
    divCarta.appendChild(elemPreco);

    let cartasDivision = document.querySelector('#cartas');
    cartasDivision.appendChild(divCarta);

    document.querySelector('form').reset();
});