'use strict';
module.exports = function (grunt) {

    return {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish'),
            force: true //report JSHint errors but not fail the task
        },

        gruntfile: {
            src: ['Gruntfile.js', grunt.getPath('grunt') + '**/*.js']
        },

        all: {
            src: [grunt.getPath('js', true) + '**/*.js']
        }
    };

};
