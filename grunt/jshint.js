'use strict';
module.exports = function (grunt) {

    return {
        options: {
            jshintrc: '.jshintrc',
            force: true //report JSHint errors but not fail the task
        },

        gruntfile: {
            src: ['Gruntfile.js', 'grunt/**/*.js']
        },

        all: {
            src: ['<%= site.src_js %>/**/*.js']
        }
    };

};
