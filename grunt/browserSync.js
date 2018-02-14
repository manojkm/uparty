module.exports = {
    server: {
        bsFiles: {
            src: [
                '<%= site.dev_assets %>/**',
                '<%= site.dev %>/vendor/!**',
                '<%= site.dev %>/!*.php',
                '<%= site.dev %>/!*.html'
            ]
        },
        options: {
            watchTask: true, //Option 'false' will open browser directly without watching grunt tasks.
            open: false,
            online: false,
            background: true,
            debugInfo: true,
            logConnections: true,
            notify: true,
            port: '<%= site.dev_port %>',
            server: {
                baseDir: '<%= site.dev %>',
                routes: {
                    '/vendor': './<%= site.node_dir %>'
                }
            },

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
                '<%= site.dev_assets %>/**',
                '<%= site.dev %>/vendor/**',
                '<%= site.dev %>/*.php',
                '<%= site.dev %>/*.html'
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
                host: "127.0.0.1",
                port: 9001
            }
        }
    }
};
