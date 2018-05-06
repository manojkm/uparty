'use strict';
module.exports = function (grunt) {
    return {
        dist: {
            options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true,
                cwd: grunt.getPath('img', false, true),
                src: ['**/*.{png,jpg,gif,ico}'],
                dest: grunt.getPath('img', false, true)
            }]
        }
    };

};
