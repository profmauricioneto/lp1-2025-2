const {app, BrowserWindow, ipcMain} = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
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

ipcMain.on('canal-teste', (event, message) => {
    console.log(`Chegou a seguinte mensagem da renderer: ${message}`);

    event.reply('canal-resposta', 'messagem da main para rendered');
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

