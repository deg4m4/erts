"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var mainWindow;
electron_1.ipcMain.on("setpos", function (e, v) {
    mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.setPosition(v.x, v.y);
});
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        width: 800
    });
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
