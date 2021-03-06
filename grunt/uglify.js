'use strict';
module.exports = function (grunt) {
    return {
        options: {
            banner: '<%= meta.banner %>',
            sourceMap: false,
            mangle: false
        },

        uglify: {
            files: [{
                expand: true,
                cwd: grunt.getPath('js', false, true),
                src: ['**/*.js', '!**/*.min.js'],
                dest: grunt.getPath('js', false, true),
                ext: '.min.js',
                extDot: 'last' // OR enable the below 'rename' function
                /*   rename: function (dest, src) {
                 // src chosen.jquery.js
                 var folder = src.substring(0, src.lastIndexOf('/'));
                 var filename = src.substring(src.lastIndexOf('/'), src.length);

                 filename = filename.substring(0, filename.lastIndexOf('.'));

                 // return chosen.jquery.min.js
                 return dest + folder + filename + '.min.js';
                 }*/
            }]
        }
    };

};
