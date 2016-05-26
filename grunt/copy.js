module.exports = {

    vendor: {
        files: [
            { expand: true, cwd: '<%= site.src %>/bower_components/', src: ['**'], dest: '<%= site.build %>/vendor/' },
        ],
    },

    assets: {
        files: [
            { expand: true, cwd: '<%= site.src_assets %>/css/', src: ['**'], dest: '<%= site.build_assets %>/css/' },
            { expand: true, cwd: '<%= site.src_assets %>/js/', src: ['**'], dest: '<%= site.build_assets %>/js/' },
            { expand: true, cwd: '<%= site.src_assets %>/fonts/', src: ['**'], dest: '<%= site.build_assets %>/fonts/' },
        ],
    },

};
