var path = require('path');
var electron = require('electron-prebuilt');

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        electron: {
            windows: {
                options: {
                    name: 'AppBase',
                    dir: 'build/',
                    out: 'dist',
                    version: '0.30.5',
                    platform: 'win32',
                    arch: 'x64',
                    asar: true
                }
            },
            osx: {
                options: {
                    name: 'AppBase',
                    dir: 'build/',
                    out: 'dist',
                    version: '0.30.5',
                    platform: 'darwin',
                    arch: 'x64',
                    asar: true,
                }
            }
        },

        babel: {
            options: {
                sourceMap: 'inline',
                blacklist: 'regenerator'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'build/',
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true,
                     cwd : '.',
                     src: ['package.json', 'settings.json', 'index.html'],
                     dest: 'build/'},
                    {expand: true,
                     cwd : 'images/',
                     src: ['**/*'],
                     dest: 'build/',
                    }
                ],
            },
        },
        shell: {
            electron: {
                command: electron + ' ' + 'build'
            }
         }

    });

    grunt.registerTask('default', ['babel','copy:main','shell:electron']);
    grunt.registerTask('build', ['electron']);

};
