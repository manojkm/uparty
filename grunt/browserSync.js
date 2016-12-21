module.exports = {
    dev: {

        bsFiles: {
            src: [
                '<%= site.dev_assets %>/**',
                '<%= site.dev %>/vendor/**',
                '<%= site.dev %>/*.php',
                '<%= site.dev %>/*.html'
            ]
        },

        options: {
            watchTask: true, //Option 'false' will open browser directly without watching grunt tasks.
           
           port: '<%= site.dev_port %>',
            server: {
                baseDir: "<%= site.dev %>"
            }

            
        }
    },
};
