'use strict';
module.exports = function (grunt) {

    return {
        all: {
            src: grunt.getPath('img', true) + 'sprite/*.png',
            dest: grunt.getPath('img', false, true) + 'sprite/spritesheet.png',
            destCss: grunt.importPaths + 'sprite/sprites.css'
        }
    };

};
