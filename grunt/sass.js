module.exports = {
    dev: {
        options: {
            lineNumbers: true,
            // loadPath: [
                //'<%= site.src %>/bower_components/bootstrap/scss/',
                // '<%= site.src_assets %>/scss/base',
                // '<%= site.src_assets %>/scss/modules',
                // '<%= site.src_assets %>/scss/partials',
            // ],
            includePaths: require('node-bourbon').includePaths,
            sourceMap: true,
            outputStyle: 'expanded' //Values: nested, expanded, compact, compressed

        },

        files: {
            '<%= site.dev_assets %>/css/style.css': '<%= site.src_assets %>/scss/style.scss',
            '<%= site.dev_assets %>/css/bootstrap.css': '<%= site.src_assets %>/scss/bootstrap.scss',
        }
    }
};
