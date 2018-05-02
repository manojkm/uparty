'use strict';
module.exports = function (grunt) {

    return {
        options: {
            csslintrc: '.csslintrc',
            import: 2
        },

        lint: {
            src: [grunt.importPaths + '**/*.css', '!' + grunt.importPaths + '**/*.min.css']
        }
    };

};
