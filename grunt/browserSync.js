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
            proxy: "http://localhost/imageprocez/app/development/",
            // proxy: "http://localhost/linenblog/app/environment/",
        }
    },
};
