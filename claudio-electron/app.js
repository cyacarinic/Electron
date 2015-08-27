document.write('La versión actual de io.js es : ' +process.version)

// podemos leer archivos con el módulo FileSync de Node
var fs = require('fs')
var contents = fs.readFileSync('./package.json', 'utf8')
alert(contents)
