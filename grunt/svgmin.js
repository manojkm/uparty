'use strict';
module.exports = function (grunt) {
    return {
        options: {

        },

        svgmin: {
            files: [{
                expand: true,
                cwd: '<%= site.dev_img %>/',
                src: ['**/*.svg'],
                dest: '<%= site.dev_img %>/'
            }]
        }
    };

};
