'use strict';
module.exports = function (grunt) {
    return {
        options: {
            noProcess: ['.DS_Store', '.gitignore', '.sass-cache', 'node_modules']
        },

        vendors: {
            files: [
                {expand: true, cwd: grunt.getPath('node') +'metismenu', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'metismenu', filter: 'isFile'},
                {expand: true, cwd: grunt.getPath('node') +'animate.css', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'animate.css', filter: 'isFile'},
            ]
        },

        vendors_extended: {
            files: [
                {expand: true, cwd: grunt.getPath('js_vi', true), src: ['**/*.js'], dest: grunt.getPath('js_vi', false, true), filter: 'isFile'}
                // TODO This guy is copying from nodemodule https://github.com/thomaspark/bootswatch/blob/master/Gruntfile.js
            ]
        },

        /* js: {
         files: [
         {expand: true, cwd: grunt.getPath('js', true), src: ['**!/!*.js'], dest: grunt.getPath('js', false, true), filter: 'isFile'}
         ]
         },*/

        images: {
            files: [
                {expand: true, cwd: grunt.getPath('img', true), src: ['**'], dest: grunt.getPath('img', false, true), filter: 'isFile'}
            ]
        },

        fonts: {
            files: [
                {expand: true, cwd: grunt.getPath('fonts', true), src: ['**'], dest: grunt.getPath('fonts', false, true), filter: 'isFile'}
            ]
        }
    };

};
