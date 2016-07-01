module.exports = {
    options: {
        // separator: ';',
    },

    dev: {
        src: ['<%= jsCombPath %>'],
        dest: '<%= site.dev_assets %>/js/<%=site.name %>.js',
        nonull: true, //to warn if a given file is missing or invalid
    },

};
