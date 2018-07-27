'use strict';
module.exports = function (grunt) {
    return {
        server: {
            bsFiles: {
                src: [
                    //grunt.getPath('dest') + '**/*.{css,js,html,png,jpg}'
                    grunt.getPath('dest') + '**/*.{css}'
                ]
            },
            options: {
                watchTask: true, //Option 'false' will open browser directly without watching grunt tasks.
                open: false,
                proxy: "http://obeus.com",

                // plugins: [
                //     {
                //         module: 'bs-html-injector',
                //         options: {
                //             files: [grunt.getPath('dest') + '**/*.html']
                //         }
                //     }
                // ],

                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                }
            }
        },

        //TODO, check proxy settings later - https://github.com/BrowserSync/grunt-browser-sync/blob/master/Gruntfile.js#L113
        proxy: {
            files: {
                src: [
                    grunt.getPath('dest') + '**/*.{css,js,html,png,jpg}'
                ]
            },
            options: {
                watchTask: false,
                ghostMode: {
                    scroll: true,
                    links: true,
                    forms: true
                },
                proxy: {
                    host: '127.0.0.1',
                    port: 9001
                }
            }
        }
    };
};
