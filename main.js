const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    // Load url
    // win.loadURL('https://www.google.com')
}

app.on('ready', createWindow)