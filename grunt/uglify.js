module.exports = {
    options: {
        sourceMap: false,
    },


    dev: {
        files: [{
            expand: true,
            cwd: '<%= site.dev_assets %>/js/',
            src: ['<%=site.name %>.js', ],
            dest: '<%= site.dev_assets %>/js/',
            ext: '.min.js'
        }, ]
    }

    // dev: {
    //     files: [{
    //         expand: true,
    //         cwd: '<%= site.dev_assets %>/js/',
    //         // src: ['<%=site.name %>.js', 'vendor.js'],
    //         src: ['**/*.js', '!**/*.min.js'],
    //         dest: '<%= site.dev_assets %>/js/',
    //         ext: '.min.js'
    //     }, ]
    // }

    // custom: {
    //     files: [{
    //         expand: true,
    //         cwd: '<%= site.dev_assets %>/js/',
    //         src: ['**/*.js', '!**/*.min.js'],
    //         dest: '<%= site.dev_assets %>/js/',
    //         ext: '.min.js'
    //     }, ]
    // }

};
