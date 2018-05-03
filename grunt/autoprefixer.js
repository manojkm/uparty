'use strict';
module.exports = function (grunt) {

    return {
        options: {
            map: (isProd) ? false : true , // Autoprefixer will not remove source-map info from sass file.
            browsers: ['last 2 versions'],
            expand: true,
            flatten: true,
            nonull: true // To warn if a given file is missing or invalid
        },

        autoprefix: {
            src: [grunt.importPaths + '**/*.css', '!' + grunt.importPaths + '**/*.min.css']
        }
    };

};
