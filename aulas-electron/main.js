const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

const createWindow = () => {
    const window = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        width: 800,
        height: 600
    });
    window.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
}).catch(() => {
    console.error(`erro ao carregar a pagina`);
})

// ipcMain.on('canal-teste', (event, message) => {
//     console.log(`Chegou a seguinte mensagem da renderer: ${message}`);

//     event.reply('canal-resposta', 'messagem da main para rendered');
// })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

ipcMain.handle('canal-teste', async(event, data) => {
    console.log(`Mensagem da renderer: ${data.key}`);
    return `Resposta para a renderer da main!`;
})