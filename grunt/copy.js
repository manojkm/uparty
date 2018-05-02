module.exports = {


    options: {
        noProcess : ['.DS_Store', '.gitignore', '.sass-cache', 'node_modules']
    },

    vendor: {
        files: [
            {expand: true, cwd: '<%= site.src %>/vendor/', src: ['**'], dest: '<%= site.dev %>/vendor/'}
            /* - TODO This guy is copying from nodemodule https://github.com/thomaspark/bootswatch/blob/master/Gruntfile.js*/
        ]
    },

    js: {
        files: [
            {expand: true, cwd: '<%= site.src_assets %>/js/', src: ['**/*.js'], dest: '<%= site.dev_assets %>/js/'}
        ]
    },

    images: {
        files: [
            {expand: true, cwd: '<%= site.src_assets %>/img/', src: ['**'], dest: '<%= site.dev_assets %>/img/'}
        ]
    },

    fonts: {
        files: [
            {expand: true, cwd: '<%= site.src_assets %>/fonts/', src: ['**'], dest: '<%= site.dev_assets %>/fonts/'}
        ]
    }


};
