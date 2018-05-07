'use strict';
module.exports = function (grunt) {
    return {
        options: {
            htmlhintrc: '.htmlhintrc' //Config file
        },

        html1: {
            src: [grunt.getPath('dest') + '*.html']
        }
    };
};
