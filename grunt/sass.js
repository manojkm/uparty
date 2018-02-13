module.exports = {
    dev: {
        // Enble the below if you are using grunt-sass
        /* options: {
         lineNumbers: true,
         includePaths: require('node-bourbon').includePaths,
         sourceMap: true,
         outputStyle: 'expanded' //Values: nested, expanded, compact, compressed

         },
         */

        // Enble the below if you are using grunt-contrib-sass
        options: {
            loadPath: require('node-bourbon').includePaths,
            style: 'expanded',
        },

        files: {
            '<%= site.dev_assets %>/css/style.css': '<%= site.src_assets %>/scss/style.scss',
            '<%= site.dev_assets %>/css/bootstrap.css': '<%= site.src_assets %>/scss/bootstrap.scss',
        }
    }
};
