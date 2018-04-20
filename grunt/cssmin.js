module.exports = {
    options: {},

    dev: {
        src: ['<%= cssCombPath %>'], // File is located at /app/source/data/csscomb.json
        dest: '<%= site.dev_assets %>/css/<%=site.name %>.min.css',
        nonull: true, //to warn if a given file is missing or invalid
    },


};
