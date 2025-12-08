// const { ipcRenderer } = require('electron');

console.log('versao do node: ' + window.myAPI.node());
console.log('versao do chromium: ' + window.myAPI.chromium());
console.log('versao do electron: ' + window.myAPI.electron());

document.querySelector('#btn-enviar').addEventListener('click', async () => {
    const response = await ipcRenderer.invoke('canal-teste', { key: 'enviando para main!'});
    alert(response);
});




// ipcRenderer.on('canal-resposta', (event, message) => {
//     alert(`resposta da main: ${message}`);
// })


