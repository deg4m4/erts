import { app, BrowserWindow, ipcMain} from "electron"
import * as path from "path"

let mainWindow: Electron.BrowserWindow | null;

ipcMain.on("setpos", (e, v) => {
    mainWindow?.setPosition(v.x, v.y);
})

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        width: 800
    })


    mainWindow.loadFile(path.join(__dirname, "../build/index.html"))

    mainWindow.webContents.openDevTools();

    mainWindow.on("closed", () => {
        mainWindow = null
    })

}

app.on("ready", createWindow)

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
})

