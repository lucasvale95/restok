const { app, BrowserWindow, Notification, Menu, ipcMain } = require("electron");
// const { adicionarEventoDeClique } = require("./js/appFunctions");
const path = require("path");
const isDev = require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 800,
    minWidth: 940,
    minHeight: 640,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preloader.js"),
    },
    titleBarStyle: "hidden",
  });

  const logoPath = path.join(__dirname, "logo192.png");
  win.setIcon(logoPath);

  // win.webContents.openDevTools();

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  process.on("unhandledRejection", (erro) => {
    console.error("Promessa não tratada:", erro);
  });

  ipcMain.on("minimizeApp", () => {
    win.minimize();
  });

  ipcMain.on("maximizeRestoreApp", () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });

  ipcMain.on("closeApp", () => {
    win.close();
  });
}

const menu = Menu.buildFromTemplate([{ label: "teste" }]);
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  createWindow();
  // adicionarEventoDeClique();

  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  //notification();
});

function notification() {
  if (!Notification.isSupported()) return;
  console.log(path.join(__dirname, "src", "boneconeve.png"));

  const notification = new Notification({
    title: "Aplicativo aberto",
    subtitle: "Subtitulo",
    body: "O aplicativo foi aberto com sucesso",
    silent: true,
    icon: path.join(__dirname, "src", "neve.png"),
    hasReply: false,
    timeoutType: "default",
  });

  notification.on("show", () => console.log("Notification show"));
  notification.on("click", () => console.log("Notification click"));
  notification.on("close", () => console.log("Notification close"));
  notification.on("failed", () => console.log("Notification failed"));

  notification.show();
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
