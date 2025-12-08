const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
    node: () => process.versions.node,
    chromium: () => process.versions.chrome,
    electron: () => process.versions.electron,
});