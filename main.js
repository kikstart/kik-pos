const path = require('path')
const url = require('url')

// Electron
const { app, BrowserWindow } = require('electron')

// Start Express API on Server Port
require('./server/app')

let mainWin, welcomeWin

function createWindow () {
  welcomeWin = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false
  })

  welcomeWin.on('closed', () => { welcomeWin = null })

  welcomeWin.loadURL(url.format({
    pathname: path.join(__dirname, 'client', 'welcome.html'),
    protocol: 'file:',
    slashes: true
  }))

  // display welcome screen for 3 seconds
  setTimeout(() => {
    mainWin = new BrowserWindow({
      width: 1024,
      height: 768
    })

    mainWin.on('closed', () => { mainWin = null })

    mainWin.loadURL(url.format({
      pathname: path.join(__dirname, 'client', 'main.html'),
      protocol: 'file:',
      slashes: true
    }))

    welcomeWin.close()
  }, 3000)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWin === null) {
    createWindow()
  }
})
