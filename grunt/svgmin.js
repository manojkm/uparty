'use strict';
module.exports = function (grunt) {
    return {
        options: {

        },

        svgmin: {
            files: [{
                expand: true,
                cwd: grunt.getPath('img', false, true),
                src: ['**/*.svg'],
                dest: grunt.getPath('img', false, true)
            }]
        }
    };

};
