module.exports = {
    dev: {
        options: {
            // loadPath: [
            //     //'<%= site.src %>/bower_components/bootstrap/scss/',
            //     '<%= site.src_assets %>/scss/base',
            //     '<%= site.src_assets %>/scss/modules',
            //     '<%= site.src_assets %>/scss/partials',
            // ],

            style: 'expanded',
            compass: true
        },

        files: {
            '<%= site.dev_assets %>/css/style.css': '<%= site.src_assets %>/scss/style.scss',
        }
    }
};
