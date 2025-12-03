const { ipcRenderer } = require('electron')

document.querySelector('#btn-enviar').addEventListener('click', () => {
    ipcRenderer.send('canal-teste', 'Mensagem enviada da renderer para a Main!');
})

ipcRenderer.on('canal-resposta', (event, message) => {
    alert(`resposta da main: ${message}`);
})
