module.exports = function (grunt) {

    return {

        options: {
            map: true, // Autoprefixer will not remove sourcemap info from scss file.
            browsers: ['last 2 versions'],
            expand: true,
            flatten: true,
            nonull: true //to warn if a given file is missing or invalid
        },

        autoprefix: {
            src: [grunt.importPaths + '**/*.css', '!' + grunt.importPaths + '**/*.min.css']
        }
    }

};
