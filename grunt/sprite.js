'use strict';
module.exports = function (grunt) {

    return {
        all: {
            src: '<%= site.src_img %>/sprite/*.png',
            dest: '<%= site.dev_img %>/sprite/spritesheet.png',
            destCss: grunt.importPaths + '/sprites.css'
        }
    };

};
