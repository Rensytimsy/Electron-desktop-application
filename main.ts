import {BrowserWindow, app} from "electron";

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1360,
        height: 700,
    });
    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()
});