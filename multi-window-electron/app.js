//----> Este es el proceso principal

// instancio el modulo 'app'
var app = require("app")
// instancio el modulo 'browser-window'
var BrowserWindow = require("browser-window")
// ipc del main process para comunicar los procesos
var ipc = require("ipc")


// al terminal el build:
app.on("ready",function(){
    // se crea la ventana
    var mainWindow = new BrowserWindow({
        width: 800,
        heigh: 600
    })
    // "main.html" se renderea en la ventana
    mainWindow.loadUrl("file://"+__dirname+"/main.html")
    // abrimos las herramientas de desarrollador
    mainWindow.openDevTools()

    // vista oculta del menú "Claudio"
    var ventanaClaudio = new BrowserWindow({
        width: 400,
        heigh: 400,
        show: false
    })
    ventanaClaudio.loadUrl("file://"+__dirname+"/claudio.html")

    // cuando se reciban estos mnsjs
    ipc.on("toggle-claudio", function(){
        if(ventanaClaudio.isVisible()){
            ventanaClaudio.hide()
        }else{
            ventanaClaudio.show()
        }

    })
    // ipc.on("hide-claudio", function(){
    //     ventanaClaudio.hide()
    // })
})
