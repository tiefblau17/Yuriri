import { app, BrowserWindow, ipcMain } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow: Electron.BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 720,
    width: 1280,
    frame: false,

    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('system:quit', (event) => {
  app.quit();
});

ipcMain.on('setting:resolution', (event, resolution) => {
  mainWindow.setFullScreen(false);
  switch(resolution) {
    case '480':
      mainWindow.setSize(640, 480);
      break;
    case '720':
      mainWindow.setSize(1280, 720);
      break;
    case '1080':
      mainWindow.setSize(1920, 1080);
      break;
    case '1440':
      mainWindow.setSize(2560, 1440);
      break;
    case '2160':
      mainWindow.setSize(3840, 2160);
      break;
    case 'full':
      mainWindow.setFullScreen(true);
      break;
    default:
  }
});