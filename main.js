const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;
let contents;

//Listen for app to be ready
app.on('ready',function(){
    // Create new window
    mainWindow = new BrowserWindow({});
    
    // Load Html File

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'printBill.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.openDevTools();
    mainWindow.maximize();
    
    contents = mainWindow.webContents;
    let pin = contents.getPrinters();
    console.log(pin);
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
    
    //QUit app when close
    mainWindow.on('close',function(){
        app.quit();
    });

});

const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label:'Quit',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

app.on('window-all-closed', () => {
    app.quit()
  })


function getData()
{
    addWindow = new BrowserWindow({});
    
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
}
