'use strict';
module.exports = function (grunt) {
    return {
        dist: {
            options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true,
                cwd: '<%= site.dev_img %>/',
                src: ['**/*.{png,jpg,gif,ico}'],
                dest: '<%= site.dev_img %>/'
            }]
        }
    };

};
