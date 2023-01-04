// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required")

const urls = [
  "https://www.youtube.com/embed/nRwoN79u8r8",
  "https://www.youtube.com/embed/3uQNYPMVF0Q",
  "https://www.youtube.com/embed/5GDGCMGjXWU",
  "https://www.youtube.com/embed/SqBlz4a9bnk",
  "https://www.youtube.com/embed/4MW37WCi7Yk",
  "https://www.youtube.com/embed/UCv-RXA29Ak"
];

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720
  })

  const index = Math.floor(Math.random() * urls.length);
  const url = urls[index];
  mainWindow.loadURL(`${url}?autoplay=1&mute=0`);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})