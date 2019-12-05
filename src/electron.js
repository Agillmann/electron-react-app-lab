const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const os = require('os');

const { app } = electron;
const { BrowserWindow } = electron;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
  });

  // DEVTOOLS REACT
  if (isDev) {
    switch (os.platform()) {
      case 'linux':
        BrowserWindow.addDevToolsExtension(
          path.join(
            os.homedir(),
            '/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.2.1_0',
          ),
        );
        break;
      case 'windows':
        BrowserWindow.addDevToolsExtension(
          path.join(
            os.homedir(),
            '/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.2.1_0',
          ),
        );
        break;
      case 'mac':
        BrowserWindow.addDevToolsExtension(
          path.join(
            os.homedir(),
            '/Library/Application Support/Google/Chrome/Default/Extensions/' +
              'fmkadmapgofadopljbjfkapdkoienihi/4.2.1_0',
          ),
        );
        break;
      default:
    }
  }
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
