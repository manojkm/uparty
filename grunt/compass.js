// This task requires you to have Ruby and Sass installed.
module.exports = {
    dev: {
        options: {
            sassDir: '<%= site.src_assets %>/scss/',
            cssDir: '<%= site.dev_assets %>/css/',
            // generatedImagesDir: '.tmp/images/generated',
            // imagesDir: '<%= yeoman.src %>/images',
            // javascriptsDir: '<%= yeoman.src %>/js',
            // fontsDir: '<%= yeoman.src %>/css/fonts',
            // importPath: '<%= yeoman.src %>/bower_components',
            // httpImagesPath: '/images',
            // httpGeneratedImagesPath: '/images/generated',
            // httpFontsPath: '/css/fonts',
            // relativeAssets: false
        },
        // build: {
        //     options: {
        //         generatedImagesDir: '<%= yeoman.build %>/images/generated'
        //     }
        // },
        // server: {
        //     options: {
        //         debugInfo: true
        //     }
        // }
    },
};
