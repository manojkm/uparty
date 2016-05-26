module.exports = {
    dist: {
        src: [

            '<%= site.build_assets %>/js/<%=site.name %>.js'
        ],
        dest: '<%= site.build_assets %>/js/<%=site.name %>.js',
    }
};
