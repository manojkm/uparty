module.exports = {

    vendor: {
        files: [
            { expand: true, cwd: '<%= site.src %>/vendor/', src: ['**'], dest: '<%= site.dev %>/vendor/' },
        ],
    },

    css: {
        files: [
            { expand: true, cwd: '<%= site.src_assets %>/css/', src: ['**'], dest: '<%= site.dev_assets %>/css/' },
        ],
    },

    js: {
        files: [
            { expand: true, cwd: '<%= site.src_assets %>/js/', src: ['**'], dest: '<%= site.dev_assets %>/js/' },
        ],
    },

    images: {
        files: [
            { expand: true, cwd: '<%= site.src_assets %>/img/', src: ['**'], dest: '<%= site.dev_assets %>/img/' },
        ],
    },

    fonts: {
        files: [
            { expand: true, cwd: '<%= site.src_assets %>/fonts/', src: ['**'], dest: '<%= site.dev_assets %>/fonts/' },
        ],
    },


};
