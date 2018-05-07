'use strict';
module.exports = function (grunt) {
    return {
        dest: {
            src: [grunt.getPath('js', false, true) + '**/*.js', '!' + grunt.getPath('js', false, true) + '**/*.min.js'],
            options: {
                js: {
                    indentSize: 3,
                    endWithNewline: true
                }
            }
        }
    };

};
