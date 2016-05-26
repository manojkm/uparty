module.exports = {
    options: {
        sourceMap: true,
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= site.build_assets %>/js/',
            src: ['**/*.js', '!**/*.min.js'],
            dest: '<%= site.build_assets %>/js/',
            ext: '.min.js'
        }, ]
    }
};
