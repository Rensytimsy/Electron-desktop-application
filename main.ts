import { BrowserWindow, app } from 'electron';
import path from "node:path"
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const createWindow = () => {
    const win = new BrowserWindow({
        width: 1360,
        height: 700,
        // Run preloadjs before the render renders a browser preview
        webPreferences: {
            preload: path.join(__dirname, "/preload.ts")
        }
    });
    
    
    win.loadFile("index.html")
}

app.whenReady().then(() => {
    // console.log(path.join(__dirname, "preload.ts"))
    createWindow()
});