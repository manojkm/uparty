module.exports = {
    dev: {
        expand: true,
        flatten: true,
        src: '<%= cssCombPath %>',
        dest: '<%= site.dev_assets %>/css/',
        nonull: true, //to warn if a given file is missing or invalid
    }
};
