// nuestra app electron (modulo 'app')
var app = require('app')
// importamos controlador de ventana (modulo importado)
var BrowserWindow = require('browser-window')

// cuando electron termine de cargar el app
app.on('ready', function(){
    // creamos una vista principal -> "npm start"
    var mainWindow = new BrowserWindow({
        width:800,
        height:600
    })
    // llenamos la ventana con una vista
    // "__dirname" referencia al path del archivo
    mainWindow.loadUrl('file://'+__dirname+'/index.html')
    // mainWindow.loadUrl('http://google.com')
});
