module.exports = {
    dist: {
        options: {
            loadPath: [
                //'<%= site.src %>/bower_components/bootstrap/scss/',
                '<%= site.src_assets %>/scss/base',
                '<%= site.src_assets %>/scss/modules',
                '<%= site.src_assets %>/scss/partials',
            ],

            style: 'expanded',
            compass: true
        },

        files: {
            '<%= site.src_assets %>/css/<%=site.name %>.css': '<%= site.src_assets %>/scss/<%=site.name %>.scss',
        }
    }
};
