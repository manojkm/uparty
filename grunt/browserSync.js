module.exports = {
    bsFiles: {
        src: ['<%= site.build_assets %>/css/*.css', '<%= site.build %>/*.html']
    },

    options: {
        watchTask: true,
        server: {
            baseDir: "<%= site.build %>"
        }
    }
};
