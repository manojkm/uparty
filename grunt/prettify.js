'use strict';
module.exports = function (grunt) {
    return {

        options: {
            // Task-specific options go here.
            config: '.htmlprettifyrc'
        },
        html: {
            // Target-specific file lists and/or options go here.
            expand: true,
            cwd: grunt.getPath('dest'),
            ext: '.html',
            src: ['*.html'],
            dest: grunt.getPath('dest')
        }
    };

};