#Below are steps on how to run starter app using electron

**Install required dependancies**
```npm install
** run typescript compiler**
```npx tsc
    the above will generate a dist folder this is where *.ts compiled files will be stored

** running the starter project**
    ```npm run start
    
        the above will start an app instance "desktop application", that renders a webWindow using BrowserWindow
        const win = new BrowserWindow ({})
        win.loadFile("index.html") you can load a page url too using win.loadURL()