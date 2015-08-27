//-----> Esto se ejecuta en el proceso de renderéo
// Se llama desde main.html

// instanciamos el proceso principal
var remote = require('remote')
// instanciamos el módulo "menu"
var Menu = remote.require('menu')
// ipc es usado para hacer llamadas entre procesos
// (Inter Process Communication) del proceso de rendereo
var ipc = require("ipc")

// creamos el menú
var menu = Menu.buildFromTemplate([
    {
        // menu
        label:"MiApp",
        submenu:[
            {
                // sub menu
                label: "Claudio",
                // acción
                click: function(){
                    alert("Click en Claudio")
                    // Podemos crear una nueva ventana aca, pero
                    // lo recomendable es manejarlas en "apps.js"

                    // enviamos el ipc para mostrar "claudio"
                    ipc.send("toggle-claudio")
                }
            }
        ]
    }
])
// Incluímos el menú
Menu.setApplicationMenu(menu)
