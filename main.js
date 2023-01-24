const {app, BrowserWindow} = require("electron");
const path  = require("path");

let browser;
function createWindow () {
     browser  = new BrowserWindow(
        {
            width:650,
            height:400,
            frame:false,
            minWidth:640,
            minHeight:400,
            webPreferences:{
                nodeIntegration:true,
                enableRemoteModule:true,
                contextIsolation:false,
                
            }
        
        }
    )
     
    browser.webContents.openDevTools()
    browser.loadURL("http://localhost:3000")
    browser.removeMenu()
    browser.setBackgroundColor("white")
    browser.setIcon("./src/Assets/logo1.jpg")
    
    browser.on("closed", ()=>{
        app.quit()
    })
    
}

app.whenReady().then(createWindow)


app.on("window-all-closed", ()=>{
    if (process.platform!=="darwin"){
        app.quit()
    }
})

app.on("activate", () => {
    //If All The Windows are Delay This Will Be The Default...
    if (BrowserWindow.getAllWindows().length===0){
        createWindow()
    }
})


