module.exports = {
    dev: {

        bsFiles: {
            src: [
                '<%= site.env %>/css/*.css',
                '<%= site.env %>/assets/**',
                '<%= site.env %>/*.php'
            ]
        },

        options: {
            watchTask: true, //Option 'false' will open browser directly without watching grunt tasks.
            proxy: "http://localhost/linen_wp/app/environment/",
            //proxy: "http://localhost/linenblog/app/environment/",
        }
    },
};
