module.exports = {
    options: {},

    dev: {
        src: ['<%= cssCombPath %>'],
        dest: '<%= site.dev_assets %>/css/<%=site.name %>.min.css',
        nonull: true, //to warn if a given file is missing or invalid
    },


};
