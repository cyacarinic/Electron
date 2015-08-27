var remote = require('remote');
var app = remote.require('app');
var shell = require('shell');

var MenuTemplate = function () {
    return [
        {
            label: 'AppBase',
            submenu: [
                {
                    label: 'About'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Settings'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click: function() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Archivo',
            submenu: [
                {
                    label: 'Abrir',
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Guardar',
                }
            ]
        }
    ];
};

module.exports = MenuTemplate;