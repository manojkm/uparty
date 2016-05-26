module.exports = {
    options: {},
    dist: {
        expand: true,
        cwd: '<%= site.build_assets %>/css/',
        src: ['**/*.css', '!**/*.min.css'],
        dest: '<%= site.build_assets %>/css/',
        ext: '.min.css',
    }
};
