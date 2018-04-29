module.exports = {
    options: {
        banner: '<%= meta.banner %>',
        stripBanners: true
        // separator: ';',
    },

    dev: {
        src: ['<%= jsCombPath %>'], // File is located at /app/source/data/jscomb.json
        dest: '<%= site.dev_assets %>/js/<%=site.name %>.js',
        nonull: true, //to warn if a given file is missing or invalid
    }

};